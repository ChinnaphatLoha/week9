const studentInfo = (students) => {

  const underPerformAttendanceRate = 80;
  const underPerformAvgScore = 70;

  const getAttendanceRate = (student) => {
    const totalDays = student.attendance.length;
    const attendedDays = student.attendance.filter(Boolean).length;
    return (attendedDays / totalDays) * 100;
  };

  const getAvgScore = (student) => {
    const totalScores = student.testScores.length;
    const sumScores = student.testScores.reduce((acc, std) => acc + std);
    return sumScores / totalScores;
  };

  const underPerformStudents = () => {
    return students
      .map((student) => {
        const attendanceRate = getAttendanceRate(student);
        const avgScore = getAvgScore(student);
        const name = student.name;
        return { name, attendanceRate, avgScore };
      })
      .filter(
        (student) =>
          student.attendanceRate < underPerformAttendanceRate &&
          student.avgScore < underPerformAvgScore
      );
  };

  return { getAttendanceRate, getAvgScore, underPerformStudents };
};

exports.studentInfo = studentInfo;