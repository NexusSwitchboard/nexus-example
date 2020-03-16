import { Job, NexusJobDefinition } from '@nexus-switchboard/nexus-extend';


class BasicJob extends Job {

  public name: string = "basic";

  /**
   * Override the _run method to do the work that the job entails.
   * @private
   */
  protected _run(): Promise<boolean> {
      return Promise.resolve(true);
  }
}

export default (jobsDefinition: NexusJobDefinition[]): Job[] => {
  return jobsDefinition.map((j) => {
    if (j.type === "basic") {
      return new BasicJob(j);
    }

    throw new Error(`Job type ${j.type} does not match what is available`);
  })
}
