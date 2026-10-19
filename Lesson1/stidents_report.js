class Student{
  constructor(name, grades){
    this.name = name;
    this.grades = grades;
  }
  display(){
    console.log(this.name + this.grades);
  }
  getAverage()
  {
  let sum = 0;
  for(let i = 0;i < this.grades.length;i++){
    sum += this.grades[i];
  }
    return sum/this.grades.length;
}
getLetterGrade()
{
  const avg = this.getAverage();
  if (avg >= 90) return 'A';
         else if (avg >= 80) return 'B';
         else if (avg >= 70) return 'C';
         else if (avg >= 60) return 'D';
         else return 'F';
    }
}
function analyzeClass(students){
  console.log('----------STUDENT REPORT----------')

  let totalClassAvg = 0;
  let topAvg = -1;
  let topName = '';
  for(let i = 0; i < students.length; i++){
    const s = students[i]
    const avg = s.getAverage();
    const grade = s.getLetterGrade();

    console.log(`${s.name} - Average ${avg.toFixed(1)} | Grade: ${grade}`);

    totalClassAvg += avg;
    if (avg > topAvg) {
        topAvg = avg;
        topName = s.name;
  }
}
console.log('----------------------------------')

const classAverage = totalClassAvg/students.length;
console.log(`Class Average: ${classAverage.toFixed(1)}`)
console.log(`Top Student: ${topName} with ${topAvg.toFixed(1)}`)
}
const studentData = [
     new Student("Lany", [85, 90, 92]),
     new Student("Bongbung", [70, 75, 68]),
     new Student("Dutherthe", [95, 98, 92]),
     new Student("Pico", [55, 60, 58])
 ];
 analyzeClass(studentData);
