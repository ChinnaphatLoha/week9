const { studentInfo } = require('./warmup');

const students = [
  {
    name: 'Sophia',
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90],
  },
  {
    name: 'Mason',
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62],
  },
  {
    name: 'Isabella',
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78],
  },
  {
    name: 'Liam',
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95],
  },
  {
    name: 'Olivia',
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62],
  },
];

describe('studentInfo', () => {
  let studentManager;

  beforeEach(() => {
    studentManager = studentInfo(students);
  });

  test('getAttendanceRate should calculate correct attendance rate', () => {
    const student = students[0];
    const attendanceRate = studentManager.getAttendanceRate(student);
    expect(attendanceRate).toBe(80);
  });

  test('getAvgScore should calculate correct average score', () => {
    const student = students[0];
    const avgScore = studentManager.getAvgScore(student);
    expect(avgScore).toBe(86.6);
  });

  test('underPerformStudents should return students with attendance rate < 80% and avg score < 70', () => {
    const underPerformingStudents = studentManager.underPerformStudents(students);
    expect(underPerformingStudents).toEqual([
      { name: 'Isabella', attendanceRate: 60, avgScore: 69.4 },
    ]);
  });
});
