import { Ressources } from './ressources';
import { Subject } from './subject'; // Assuming you have a Subject model

describe('Ressources', () => {
  it('should create an instance', () => {
    const subject = new Subject(1, 'Math', [], []); // Create a valid Subject instance
    const ressources = new Ressources(1, 'Resource Name', 'Resource Type', null, subject);
    expect(ressources).toBeTruthy();
  });

  // Additional test cases...
});