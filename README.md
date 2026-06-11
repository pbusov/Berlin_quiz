# Personality Pentagon

This project is designed to visualize personality traits using a pentagon chart. The traits represented in the chart include:

- **History**
- **Party**
- **Outdoor**
- **Fancy**
- **Chill**

## Project Structure

The project consists of the following main components:

- **src/app.ts**: Entry point of the application that initializes the server and handles routing.
- **src/questions/index.ts**: Contains the `Questions` class for managing personality-related questions.
- **src/scoring/index.ts**: Contains the `Scoring` class for calculating scores based on user responses.
- **src/chart/pentagon.ts**: Contains the `drawPentagon` function to render the pentagon chart.
- **src/types/index.ts**: Defines interfaces for questions and scoring data.
- **public/index.html**: The main HTML file for the user interface.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/personality-pentagon.git
   ```

2. Navigate to the project directory:
   ```
   cd personality-pentagon
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

Users will be presented with a series of questions related to their personality traits. Based on their responses, the application will calculate scores for each trait and display them in a pentagon chart.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.