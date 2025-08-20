# Go to Domain Root - Chrome Extension

A simple and lightweight Chrome extension that allows you to quickly navigate to the root of any domain with a single click.

## 🚀 Features

- **One-click navigation**: Click the extension icon to instantly go to the domain root
- **Universal compatibility**: Works on any website
- **Lightweight**: Minimal resource usage with clean, efficient code
- **Error handling**: Gracefully handles invalid URLs
- **No data collection**: Your browsing data stays private

## 📖 How it Works

When you click the extension icon, it:
1. Gets the current tab's URL
2. Extracts the protocol and hostname
3. Navigates to the domain root (e.g., `https://example.com/`)

**Example:**
- Current page: `https://github.com/user/repo/issues/123`
- After clicking: `https://github.com/`

## 🛠 Installation

### From Source (Developer Mode)

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder
5. The extension icon will appear in your toolbar

### From Chrome Web Store

*Coming soon - submission pending*

## 🎯 Use Cases

- **Quick navigation**: Easily return to a website's homepage
- **Development**: Quickly navigate to different parts of a site during testing
- **Research**: Jump to domain roots when exploring multiple pages on a site
- **Productivity**: Save time when browsing complex website structures

## 🔧 Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: `activeTab` only (minimal permissions for privacy)
- **Architecture**: Service worker background script
- **Browser Support**: Chrome, Edge, and other Chromium-based browsers

## 📁 File Structure

```
f2-home-extension/
├── manifest.json    # Extension configuration
├── background.js    # Main extension logic
└── README.md       # This file
```

## 🔒 Privacy

This extension:
- ✅ Only accesses the current active tab
- ✅ Does not collect any user data
- ✅ Does not make external network requests
- ✅ Processes URLs locally in your browser

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

This project is open source. Feel free to use, modify, and distribute as needed.

## 🐛 Known Issues

None currently reported. If you encounter any issues, please report them in the issues section.

## 📈 Version History

- **v1.0** - Initial release with basic domain root navigation functionality

---

*Made with ❤️ for productivity and simplicity*
