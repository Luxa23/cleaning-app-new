import create from 'zustand';

const useStore = create(set => {
  return {
    rooms: [
      {
        name: 'Kitchen',
        id: 'KITCHENID',
        assigneeId: 'NormanID',
        status: false,
      },
      {
        name: 'Bathroom',
        id: 'BATHROOMID',
        assigneeId: 'PaulID',
        status: false,
      },
      {
        name: 'Livingroom',
        id: 'LIVINGID',
        assigneeId: 'LauraID',
        status: false,
      },
      { name: 'Hall', id: 'HALLID', assigneeId: 'NormanID', status: false },
    ],
    flatmates: [
      {
        name: 'Norman',
        id: 'NormanID',
        photo: 'https://randomuser.me/api/portraits/men/3.jpg',
        assignedRooms: [],
      },
      {
        name: 'Laura',
        id: 'LauraID',
        photo: 'https://randomuser.me/api/portraits/women/73.jpg',
        assignedRooms: [],
      },
      {
        name: 'Paul',
        id: 'PaulID',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        assignedRooms: [],
      },
      {
        name: 'Eva',
        id: 'EvaID',
        photo: 'https://randomuser.me/api/portraits/women/56.jpg',
        assignedRooms: [],
      },
    ],
  };
});

export default useStore;
