//#region INTERFACES
// Interface defining media professionals
interface IMediaProfessional {

    firstName: string;
    lastName: string;
    specialization: string;
    experience: number;
    interests: string[];

    enrollInProgram(program: ITrainingProgram): void;
}

// Interface defining the training program
interface ITrainingProgram {

    title: string;
    description: string;
    specialization: string;
    duration: number;
    participantsList: IMediaProfessional[];

    addParticipant(professional: IMediaProfessional): void;
}

// Interface defining the publishing platform
interface IPublishingPlatform {

    name: string;
    types: string[];
    description: string;
    contentCategories: string[];

    publishContent(professional: IMediaProfessional, content: string): void;
}
//#endregion

//#region CLASSES
// Class MediaProfessional implementing IMediaProfessional interface
class MediaProfessional implements IMediaProfessional {

    firstName: string;
    lastName: string;
    specialization: string;
    experience: number;
    interests: string[];

    constructor(firstName: string, lastName: string, specialization: string, experience: number, interests: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.specialization = specialization;
        this.experience = experience;
        this.interests = interests;
    }

    enrollInProgram(program: ITrainingProgram): void {
        program.addParticipant(this);
    }
}

// Class TrainingProgram implementing ITrainingProgram interface
class TrainingProgram implements ITrainingProgram {

    title: string;
    description: string;
    specialization: string;
    duration: number;
    participantsList: IMediaProfessional[];

    constructor(title: string, description: string, specialization: string, duration: number) {
        this.title = title;
        this.description = description;
        this.specialization = specialization;
        this.duration = duration;
        this.participantsList = [];
    }

    addParticipant(professional: IMediaProfessional): void {
        this.participantsList.push(professional);
    }
}

// Class PublishingPlatform implementing IPublishingPlatform interface
class PublishingPlatform implements IPublishingPlatform {
    name: string;
    types: string[];
    description: string;
    contentCategories: string[];

    constructor(name: string, types: string[], description: string, contentCategories: string[]) {
        this.name = name;
        this.types = types;
        this.description = description;
        this.contentCategories = contentCategories;
    }

    publishContent(professional: IMediaProfessional, content: string): void {
        console.log(`Publishing content by ${professional.firstName} ${professional.lastName}: ${content}`);
    }
}   
//#endregion

//#region EXECUTION
// Creating some media professionals
const professional1 = new MediaProfessional("Anna", "Tasso", "Journalism", 5, ["Writing", "Video editing"]);
const professional2 = new MediaProfessional("Laura", "Bianchini", "Video production", 3, ["Directing", "Editing"]);
const professional3 = new MediaProfessional("Marta", "Guardiola", "Photography", 7, ["Reportage", "Post-production"]);

// Creating training programs
const mentorship = new TrainingProgram("Mentorship for Young Journalists", "A mentorship program for aspiring journalists", "Journalism", 6);
const professionalDevelopment = new TrainingProgram("Professional Development in the Media Industry", "A program to enhance skills", "Media", 8);
const technicalSpecialization = new TrainingProgram("Masterclass in Video Editing", "Advanced techniques deep dive", "Video Production", 10);

// Professionals enroll in programs
professional1.enrollInProgram(mentorship);
professional2.enrollInProgram(technicalSpecialization);
professional3.enrollInProgram(professionalDevelopment);

// Creating publishing platforms
const platform1 = new PublishingPlatform("MediaHub", ["Web", "Social Media"], "Platform for publishing multimedia content", ["Journalism", "Photography", "Video Production"]);
const platform2 = new PublishingPlatform("DiversityChannel", ["TV", "Streaming"], "Channel dedicated to diversity in the media industry", ["Talk shows", "Documentaries"]);

// Publishing content by professionals
platform1.publishContent(professional1, "An exclusive report on new journalism trends");
platform2.publishContent(professional2, "A documentary on gender equality in the media");
//#endregion
