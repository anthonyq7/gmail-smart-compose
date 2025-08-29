# Gmail Smart Compose Extension

**[Install from Chrome Web Store](https://chromewebstore.google.com/detail/gmail-smart-compose/meafhkniffdncaggpbimmboicfemoiig)**

A Chrome extension that leverages Google's Gemini AI to generate intelligent email responses directly within Gmail. Available now on the Chrome Web Store!

## Important: Setup Required

**This extension requires a Gemini API key to function.** Without setting up an API key, the AI features will not work.

- **Get your free API key**: [Google AI Studio](https://makersuite.google.com/app/apikey)
- **Setup takes 2 minutes**: Add your API key in the extension settings
- **Free tier**: 15 requests/minute with Google's free Gemini API 

## Features

- **AI-Powered Responses**: Uses Gemini 2.5 Flash Lite for intelligent email replies
- **Gmail Integration**: Seamlessly works within Gmail's compose interface
- **Context Aware**: Gathers context from the email you're replying to
- **Easy Setup**: Simple API key configuration
- **Secure**: API key stored locally in Chrome storage

## Installation

### Prerequisites
- Google Chrome browser
- Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Step 1: Download the Extension
1. Clone or download this repository
2. Ensure you have the `src/` folder with all extension files

### Step 2: Enable Developer Mode in Chrome
1. Open Google Chrome
2. Navigate to `chrome://extensions/`
3. Toggle on **"Developer mode"** in the top-right corner

### Step 3: Load the Extension
1. Click **"Load unpacked"** button
2. Select the `src/` folder from this project
3. The extension should now appear in your extensions list

### Step 4: Configure API Key
1. Click the extension icon in your Chrome toolbar
2. Click the **Settings** button in the top-right corner
3. Enter your **Gemini API key** in the settings modal
4. Click **"Save"**

#### Obtaining a Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the generated key and paste it in the extension settings

## Usage

### Basic Usage
1. **Open Gmail** in Chrome
2. **Compose a new email** or reply to an existing one
3. **Click the extension icon** in your Chrome toolbar
4. **Enter your prompt** (e.g., "Make this more professional")
5. **Click "Generate & Insert"**
6. The AI-generated response will be inserted into your compose area

### Example Prompts
- "Make this email more professional and friendly"
- "Write a polite decline to this meeting invitation"
- "Summarize the key points from the original email"
- "Make this response more concise"
- "Add a professional signature"

### Keyboard Shortcut
- Use **Ctrl+Enter** in the prompt textarea to quickly generate and insert

## How It Works

1. **Context Gathering**: The extension automatically detects:
   - The email you're replying to
   - Current recipients
   - Subject line
   - Any existing draft text

2. **AI Processing**: Your prompt and context are sent to Gemini 2.5 Flash Lite

3. **Response Insertion**: The AI-generated response replaces your current draft

## Privacy & Security

- **Local Storage**: Your API key is stored securely in Chrome's local storage
- **No Server Storage**: No data is sent to our servers
- **Google AI**: Email content is sent to Google's Gemini AI service
- **Important**: We are not responsible for how Google handles your email data

## Troubleshooting

### Extension Not Working
- Ensure you're on `https://mail.google.com/*`
- Check that your API key is correctly set in Settings
- Verify the extension is enabled in `chrome://extensions/`

### API Key Issues
- Get a fresh API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- Ensure you have sufficient quota (free tier: 15 requests/minute)
- Check that the key is properly saved in the extension settings

### No Response Generated
- Check your internet connection
- Verify your API key is valid
- Ensure you have remaining API quota
- Try a different prompt

## Technical Details

- **Model**: Gemini 2.5 Flash Lite
- **API**: Google Generative AI REST API
- **Storage**: Chrome Extension Local Storage
- **Permissions**: Active tab, storage
- **Host**: Gmail (mail.google.com)

## Support

For technical issues:
1. Check the browser console for error messages
2. Verify your API key and quota
3. Ensure you're using the latest version of Chrome

## License

This project is licensed under the MIT License - see the LICENSE file for details.
