import React from 'react';

export default ({ student }) => {
  return (
      <th><a target={"_blank"} href={student.linkGithub}>{student.student}</a></th>
  );
};