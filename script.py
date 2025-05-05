import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import multilabel_confusion_matrix, ConfusionMatrixDisplay

# Assuming you have the following after validation:
# - val_loader: your validation DataLoader
# - model: your trained model
# - device: your torch device
# - mlb: your MultiLabelBinarizer (used for genre encoding)

all_true = []
all_pred = []
model.eval()
with torch.no_grad():
    for batch in val_loader:
        input_ids = batch['input_ids'].to(device)
        attention_mask = batch['attention_mask'].to(device)
        labels = batch['labels'].cpu().numpy()
        outputs = model(input_ids, attention_mask).cpu().numpy()
        preds = (outputs > 0.5).astype(int)  # threshold for multi-label
        all_true.append(labels)
        all_pred.append(preds)

all_true = np.vstack(all_true)
all_pred = np.vstack(all_pred)

# Compute confusion matrices for each genre
mcm = multilabel_confusion_matrix(all_true, all_pred)

# Plot confusion matrix for each genre
genre_names = mlb.classes_
fig, axes = plt.subplots(1, len(genre_names), figsize=(3*len(genre_names), 3))
for i, (cm, genre) in enumerate(zip(mcm, genre_names)):
    disp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=[f'Not {genre}', genre])
    disp.plot(ax=axes[i] if len(genre_names) > 1 else axes, colorbar=False)
    axes[i].set_title(genre)
    axes[i].set_xlabel('Predicted')
    axes[i].set_ylabel('True')
plt.tight_layout()
plt.show()

# If you want a single matrix with all genres as columns (for visualization):
from sklearn.metrics import confusion_matrix
# Flatten predictions and truths for all genres
cm = confusion_matrix(all_true.flatten(), all_pred.flatten(), labels=[0,1])
ConfusionMatrixDisplay(cm, display_labels=['Not Genre', 'Genre']).plot()
plt.title('Overall Confusion Matrix (All Genres)')
plt.show() 