# Screen Recorder App by Reddy Raju

## Overview
The Screen Recorder App allows users to record their screen along with audio and capture screenshots. This project leverages the WebRTC API to access the user's media devices and provides a simple interface to manage recording and capturing functionalities.

## Features
- **Real-time Video Recording**: Capture high-quality video along with audio.
- **Screenshot Functionality**: Take screenshots of the video feed.
- **Filter Options**: Apply different filters to the video stream.
- **Timer Display**: Show recording duration in hours, minutes, and seconds.

## Technologies Used
- HTML
- CSS
- JavaScript
- WebRTC API

## Getting Started

### Prerequisites
Make sure you have a modern web browser that supports the WebRTC API.

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Open `index.html` in your web browser.

## Usage
- Click the red circle button to start and stop recording.
- Click the white circle button to capture a screenshot.
- Select different filters to apply them to the video stream.

## Code Structure
- **index.html**: Main HTML file containing the structure of the app.
- **style.css**: Stylesheet for the app's layout and design.
- **index.js**: JavaScript file handling media capture, recording, and UI interactions.

## How It Works
1. The app requests access to the user's camera and microphone using `getUserMedia`.
2. It uses `MediaRecorder` to handle the recording process.
3. A timer displays the duration of the recording.
4. Users can take a screenshot, which saves the current video frame as an image.

## Contribution
Feel free to fork the repository and submit pull requests for improvements or new features!

## License
This project is open-source and available under the MIT License.

## Author
- Reddy Raju

--- 

Feel free to customize this README further based on your project's specific needs!
