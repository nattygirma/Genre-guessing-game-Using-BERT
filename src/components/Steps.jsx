import { useState } from 'react';
import './Steps.css';

const Steps = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const steps = [
    {
      title: "1. Data Preparation & Multi-label Encoding",
      description: "We first prepare our data by encoding the movie genres as multi-label binary vectors. This allows our model to predict multiple genres for each movie.",
      code: `# Encode genres as multi-label
mlb = MultiLabelBinarizer()
y = mlb.fit_transform(df['genres'].apply(eval if isinstance(df['genres'].iloc[0], str) else lambda x: x))`
    },
    {
      title: "2. Text Tokenization with BERT",
      description: "Using BERT's tokenizer to convert movie descriptions into tokens that the model can process. We set a max length of 512 tokens and handle padding automatically.",
      code: `tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
tokens = tokenizer(
    df['description'].tolist(),
    truncation=True,
    padding=True,
    max_length=512,
    return_tensors='pt'
)`
    },
    {
      title: "3. Custom Dataset Implementation",
      description: "Creating a custom PyTorch Dataset class to handle our movie data, combining tokenized text with genre labels.",
      code: `class MovieDataset(Dataset):
    def __init__(self, tokens, labels):
        self.tokens = tokens
        self.labels = torch.tensor(labels).float()

    def __len__(self):
        return len(self.labels)

    def __getitem__(self, idx):
        item = {key: val[idx] for key, val in self.tokens.items()}
        item['labels'] = self.labels[idx]
        return item`
    },
    {
      title: "4. BERT-based Model Architecture",
      description: "Implementing our custom BERT-based classifier with dropout for regularization and a linear classification head.",
      code: `class BertGenreClassifier(nn.Module):
    def __init__(self, num_labels):
        super().__init__()
        self.bert = BertModel.from_pretrained('bert-base-uncased')
        self.dropout = nn.Dropout(0.3)
        self.classifier = nn.Linear(self.bert.config.hidden_size, num_labels)

    def forward(self, input_ids, attention_mask):
        outputs = self.bert(input_ids=input_ids, attention_mask=attention_mask)
        cls_output = outputs.last_hidden_state[:, 0]
        x = self.dropout(cls_output)
        return torch.sigmoid(self.classifier(x))`
    },
    {
      title: "5. Training Setup & Configuration",
      description: "Setting up the training environment with AdamW optimizer and Binary Cross Entropy loss, suitable for multi-label classification.",
      code: `device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = BertGenreClassifier(num_labels=y.shape[1]).to(device)
optimizer = AdamW(model.parameters(), lr=5e-7)
loss_fn = nn.BCELoss()`
    }
  ];

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <div className="steps-container">
      {steps.map((step, index) => (
        <div key={index} className={`step ${expandedStep === index ? 'expanded' : ''}`}>
          <div className="step-header" onClick={() => toggleStep(index)}>
            <h3>{step.title}</h3>
            <span className="step-icon">▼</span>
          </div>
          <div className={`step-content ${expandedStep === index ? 'expanded' : ''}`}>
            <p className="step-description">{step.description}</p>
            <div className="code-block">
              <pre>{step.code}</pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
