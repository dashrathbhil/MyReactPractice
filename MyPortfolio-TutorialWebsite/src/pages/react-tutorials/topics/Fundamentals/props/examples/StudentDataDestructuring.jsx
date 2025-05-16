import React from 'react';

function StudentDataDestructuring(props) {
  const { name, age, phone, email } = props;

  return (
    <table border={1} className="table table-bordered w-50 mb-4">
      <tbody>
        <tr><th>Student Name</th><td>{name}</td></tr>
        <tr><th>Student Age</th><td>{age}</td></tr>
        <tr><th>Student Phone</th><td>{phone}</td></tr>
        <tr><th>Student Email</th><td>{email}</td></tr>
      </tbody>
    </table>
  );
}

export default StudentDataDestructuring;
