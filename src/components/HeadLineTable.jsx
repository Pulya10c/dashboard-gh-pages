/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

export default ({ student }) => (
  <th><a target="_blank" href={student.linkGithub}>{student.student}</a></th>
);
