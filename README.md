
# 📺 ** Media Professionals Project** 

This project is a simulation of a system that allows media professionals to participate in training programs and publish content on different platforms. The system consists of various interfaces and classes, enabling the management of professionals, training programs, and publishing platforms **interfaces** and **classes**, enabling the management of professionals, training programs, and publishing platforms.

## 🧑‍💻 **Project Structure**

### Interfaces

- **IMediaProfessional**: Defines the properties and methods that every media professional must have. Professionals can participate in training programs.
  
- **ITrainingProgram**: Represents a training program with a title, description, specialization, duration, and a list of participants. Programs can add participants.
  
- **IPublishingPlatform**: Represents a publishing platform with a name, type (e.g., Web or TV), description, and a list of content categories. Platforms can publish content created by professionals.

### Classes

- **MediaProfessional**: Implements the `IMediaProfessional`interface. Represents a media professional who can participate in training programs and publish content.
  
- **TrainingProgram**: Implements the `ITrainingProgram`interface. Manages the addition of participants and the registration of training programs.
  
- **PublishingPlatform**: Implements the `IPublishingPlatform`interface. Manages the publication of content on different types of platforms.

## ⚙️ **Features**

1. **Creating Professionals**: Creates `MediaProfessional` objects representing journalists, video producers, photographers, and other media professionals.
  
2. **Creating Training Programs**: Defines training programs on various topics, such as journalism, video production, photography, etc.
  
3. **Program Enrollment**: Professionals can enroll in one or more training programs to enhance their skills.
  
4. **Publishing Platforms**: Creates publishing platforms, both online and on TV channels, where professionals can publish multimedia content.
  
5. **Content Publication**: Professionals can publish content (reports, documentaries, articles, etc.) on platforms.

🛠️ **Technologies Used**

The project is developed in TypeScript, a superset of JavaScript that adds static typing and other features.

🚀 Clone the repository:

git clone https://github.com/julysway/Progetto-Typescript-di-Giuliana-Magri

npm install

🤝
If you want to contribute to this project, feel free to submit a pull request or report issues through the issues section.
