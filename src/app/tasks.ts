export interface Tasks {
  task_id: number,
  title: string,
  description: string,
  status: string

}

export const tasks: Tasks[] = [
  {
    task_id: 1,
    title: 'Phone XL',
    description: 'A large phone with one of the best screens. Fixing Screen Display and settings',
    status: 'complete',

  },
  {
    task_id: 2,
    title: 'Phone Mini',
    description: 'A great phone with one of the best cameras. upgrading OS',
    status: 'complete',

  },
  {
    task_id: 3,
    title: 'Phone Standard',
    description: ' Installation of a radio fusion battery',
    status: 'Incomplete',

  }

];
