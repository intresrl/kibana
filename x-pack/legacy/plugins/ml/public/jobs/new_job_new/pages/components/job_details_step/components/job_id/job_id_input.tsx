/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React, { FC, useState, useContext, useEffect } from 'react';
import { EuiFieldText } from '@elastic/eui';
import { JobCreatorContext } from '../../../job_creator_context';
import { Description } from './description';

export const JobIdInput: FC = () => {
  const { jobCreator, jobCreatorUpdate } = useContext(JobCreatorContext);
  const [jobId, setJobId] = useState(jobCreator.jobId);

  useEffect(() => {
    jobCreator.jobId = jobId;
    jobCreatorUpdate();
  }, [jobId]);

  return (
    <Description>
      <EuiFieldText placeholder="Job Id" value={jobId} onChange={e => setJobId(e.target.value)} />
    </Description>
  );
};
