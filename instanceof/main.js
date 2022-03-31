function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  if (isArray(learningPaths)) {
    this.learningPaths = [];

    for (let learningPath of learningPaths) {
      if (learningPath instanceof LearningPath) {
        this.learningPaths.push(learningPath);
      }
    }
  }
}

const firstLearningPath = new LearningPath({ name: "First Learning Path" });
const secondLearningPath = new LearningPath({ name: "Second Learning Path" });
const student1 = new Student({
  email: "student1@email.co",
  name: "Student1",
  learningPaths: [firstLearningPath, secondLearningPath],
});
