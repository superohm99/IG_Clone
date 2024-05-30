export type User = {
    userId: string;
    name: string;
    username: string;
    avatar: string;
    isOnline: boolean;
    isStory: boolean;
}

export type Room = {
    roomId: string;
    members: User[];
}

export type Message = {
    messageId: string;
    text: string;
    createdAt: Date;
    user: User;
    room: Room;
}

export type Note = {
    noteId: string;
    text: string;
    createdAt: Date;
    isDelete: boolean;
    user: User;
}

export type Story = {
    storyId: string;
    image: string;
    createdAt: Date;
    isDelete: boolean;
    user: User;
}

export type Inbox = {
    interlocutorUser: User;
    lastMessage: Message;
};

const users: User[] = [
    {
        userId: "1",
        name: "John Doe",
        username: "johndoe",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
        isOnline: true,
        isStory: true
    },
    {
        userId: "2",
        name: "Jane Smith",
        username: "janesmith",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
        isOnline: false,
        isStory: true
    },
    {
        userId: "3",
        name: "Alice Johnson",
        username: "alicej",
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
        isOnline: true,
        isStory: false
    },
    {
        userId: "4",
        name: "Bob Brown",
        username: "bobbrown",
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
        isOnline: true,
        isStory: true
    },
    {
        userId: "5",
        name: "Emily Taylor",
        username: "emilytaylor",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
        isOnline: false,
        isStory: false
    }
];

// Mock rooms
export const rooms: Room[] = [
    {
        roomId: "101",
        members: [users[0], users[1]] // John Doe and Jane Smith
    },
    {
        roomId: "102",
        members: [users[0], users[2]] // John Doe and Alice Johnson
    },
    {
        roomId: "103",
        members: [users[1], users[3]] // Jane Smith and Bob Brown
    },
    {
        roomId: "104",
        members: [users[2], users[4]] // Alice Johnson and Emily Taylor
    },
    {
        roomId: "105",
        members: [users[3], users[4]] // Bob Brown and Emily Taylor
    },
    {
        roomId: "106",
        members: [users[0], users[3]] // John Doe and Bob Brown
    }
];

// Mock messages
export const messages: Message[] = [
    {
        messageId: "301",
        text: "Hello, everyone!",
        createdAt: new Date(),
        user: users[0], // John Doe
        room: rooms[0] // Room 101
    },
    {
        messageId: "302",
        text: "How are you doing?",
        createdAt: new Date(Date.now() + 1000), // 1 second after previous message
        user: users[1], // Jane Smith
        room: rooms[0] // Room 101
    },
    {
        messageId: "303",
        text: "I'm fine, thanks!",
        createdAt: new Date(Date.now() + 2000), // 2 seconds after previous message
        user: users[0], // John Doe
        room: rooms[0] // Room 101
    },
    {
        messageId: "304",
        text: "Nice weather today!",
        createdAt: new Date(Date.now() + 3000), // 3 seconds after previous message
        user: users[2], // Alice Johnson
        room: rooms[1] // Room 102
    },
    // More messages for Room 101
    {
        messageId: "305",
        text: "Has anyone seen my keys?",
        createdAt: new Date(Date.now() + 4000), // 4 seconds after previous message
        user: users[1], // Jane Smith
        room: rooms[0] // Room 101
    },
    {
        messageId: "306",
        text: "Check under the couch!",
        createdAt: new Date(Date.now() + 5000), // 5 seconds after previous message
        user: users[0], // John Doe
        room: rooms[0] // Room 101
    },
    // More messages for Room 102
    {
        messageId: "307",
        text: "Let's plan the next meeting.",
        createdAt: new Date(Date.now() + 4000), // 4 seconds after previous message
        user: users[0], // John Doe
        room: rooms[1] // Room 102
    },
    {
        messageId: "308",
        text: "Sure, what time works for everyone?",
        createdAt: new Date(Date.now() + 5000), // 5 seconds after previous message
        user: users[2], // Alice Johnson
        room: rooms[1] // Room 102
    },
    // More messages for Room 103
    {
        messageId: "309",
        text: "Good morning, everyone!",
        createdAt: new Date(Date.now() + 4000), // 4 seconds after previous message
        user: users[1], // Jane Smith
        room: rooms[2] // Room 103
    },
    {
        messageId: "310",
        text: "Morning! How's everyone doing today?",
        createdAt: new Date(Date.now() + 5000), // 5 seconds after previous message
        user: users[3], // Bob Brown
        room: rooms[2] // Room 103
    },
    // More messages for Room 104
    {
        messageId: "311",
        text: "Happy Friday, folks!",
        createdAt: new Date(Date.now() + 4000), // 4 seconds after previous message
        user: users[2], // Alice Johnson
        room: rooms[3] // Room 104
    },
    {
        messageId: "312",
        text: "Who's up for lunch?",
        createdAt: new Date(Date.now() + 5000), // 5 seconds after previous message
        user: users[4], // Emily Taylor
        room: rooms[3] // Room 104
    },
    // More messages for Room 105
    {
        messageId: "313",
        text: "Anyone interested in watching a movie tonight?",
        createdAt: new Date(Date.now() + 4000), // 4 seconds after previous message
        user: users[3], // Bob Brown
        room: rooms[4] // Room 105
    },
    {
        messageId: "314",
        text: "Sounds like a plan!",
        createdAt: new Date(Date.now() + 5000), // 5 seconds after previous message
        user: users[4], // Emily Taylor
        room: rooms[4] // Room 105
    },
    // More messages for Room 106
    {
        messageId: "315",
        text: "How was everyone's weekend?",
        createdAt: new Date(Date.now() + 4000), // 4 seconds after previous message
        user: users[0], // John Doe
        room: rooms[5] // Room 106
    },
    {
        messageId: "316",
        text: "It was great, thanks for asking!",
        createdAt: new Date(Date.now() + 5000), // 5 seconds after previous message
        user: users[3], // Bob Brown
        room: rooms[5] // Room 106
    },
    // add more message for user 1
    {
        messageId: "317",
        text: "I'm going to the beach this weekend!",
        createdAt: new Date(Date.now() + 6000), // 6 seconds after previous message
        user: users[0], // John Doe
        room: rooms[0] // Room 101
    },
    {
        messageId: "318",
        text: "That sounds fun! I'm going to the mountains.",
        createdAt: new Date(Date.now() + 7000), // 7 seconds after previous message
        user: users[1], // Jane Smith
        room: rooms[0] // Room 101
    },
    {
        messageId: "319",
        text: "I'm going to the city to see a show.",
        createdAt: new Date(Date.now() + 8000), // 8 seconds after previous message
        user: users[1], // Alice Johnson
        room: rooms[0] // Room 101
    },
    {
        messageId: "320",
        text: "I'm going to the countryside to relax.",
        createdAt: new Date(Date.now() + 9000), // 9 seconds after previous message
        user: users[1], // Bob Brown
        room: rooms[0] // Room 101
    },
    {
        messageId: "321",
        text: "I'm going to the park to read a book.",
        createdAt: new Date(Date.now() + 10000), // 10 seconds after previous message
        user: users[1], // Emily Taylor
        room: rooms[0] // Room 101
    
    }
];

// Mock notes
export const notes: Note[] = [
    // {
    //     noteId: "201",
    //     text: "Remember to buy groceries",
    //     createdAt: new Date(),
    //     isDelete: false,
    //     user: users[0] // User John Doe
    // },
    {
        noteId: "202",
        text: "Call mom",
        createdAt: new Date(Date.now() + 1000), // 1 second after previous note
        isDelete: false,
        user: users[1] // User Jane Smith
    },
    {
        noteId: "203",
        text: "Finish project by Friday",
        createdAt: new Date(Date.now() + 2000), // 2 seconds after previous note
        isDelete: false,
        user: users[2] // User Alice Johnson
    },
    {
        noteId: "204",
        text: "Buy flowers for Emily",
        createdAt: new Date(Date.now() + 3000), // 3 seconds after previous note
        isDelete: false,
        user: users[0] // User Bob Brown
    },
    {
        noteId: "205",
        text: "Don't forget to walk the dog",
        createdAt: new Date(Date.now() + 4000), // 4 seconds after previous note
        isDelete: false,
        user: users[2] // User Emily Taylor
    },
    {
        noteId: "206",
        text: "Pick up dry cleaning",
        createdAt: new Date(Date.now() + 5000), // 5 seconds after previous note
        isDelete: false,
        user: users[1] // User Jane Smith
    },
    {
        noteId: "207",
        text: "Schedule dentist appointment",
        createdAt: new Date(Date.now() + 6000), // 5 seconds after previous note
        isDelete: false,
        user: users[1] // User Jane Smith
    },
    {
        noteId: "208",
        text: "Buy a gift for Bob",
        createdAt: new Date(Date.now() + 7000), // 5 seconds after previous note
        isDelete: false,
        user: users[3] // User Bob Brown
    },
    {
        noteId: "209",
        text: "Plan a surprise party for Alice",
        createdAt: new Date(Date.now() + 8000), // 5 seconds after previous note
        isDelete: false,
        user: users[4] // User Emily Taylor
    }
    // Add more notes as needed
];

export const currentUser = users[0];

export const getUserByUsername = (username: string) => {
    return users.find(user => user.username === username);
};


export const getInbox = (currentUser: User) => {
    let inbox: Inbox[] = [];

    // 1. Get all rooms where the current user is a member
    const roomsWithCurrentUser: Room[] = rooms.filter(room => room.members.includes(currentUser));

    // 2. Get the last message for each room
    roomsWithCurrentUser.forEach(room => {
        const lastMessage: Message = messages
            .filter(message => message.room === room)
            .sort((a: Message, b: Message) => b.createdAt.getTime() - a.createdAt.getTime())[0];

        const interlocutorUser = room.members.find(member => member !== currentUser);
        if (!interlocutorUser) {
            return inbox;
        }
        
        inbox.push({
            interlocutorUser,
            lastMessage
        });

    });

    return inbox;
};


export const getNotes = (currentUser: User) => {
    // sorted by createdAt in descending order and current user first and then other users
    const sortedNotes = notes.sort((a: Note, b: Note) => {
        if(a.user === currentUser) return -1;
        if(b.user === currentUser) return 1;
        return b.createdAt.getTime() - a.createdAt.getTime();
    });
    const uniqueNotes: Note[] = [];
    sortedNotes.forEach(note => {
        // check if uniqueNotes already has a note with the same user
        if(!uniqueNotes.some(n => n.user === note.user)) {
            uniqueNotes.push(note);
        }
    });

    const initialUserNote: Note = {
        noteId: "0",
        text: "โน้ต...",
        createdAt: new Date(),
        isDelete: false,
        user: currentUser
    }

    if(!uniqueNotes.some(n => n.user === currentUser)) {
        uniqueNotes.unshift(initialUserNote);
    }

    return uniqueNotes;
}
const notesByUser = getNotes(currentUser);
// console.log(JSON.stringify(notesByUser, null, 2));

// when cliked on a chat get the room id, then get all the messages with that room id
// const roomId = inbox[2].lastMessage.room.roomId;
// const messagesForRoom = messages.filter(message => message.room.roomId === roomId);
// console.log(JSON.stringify(messagesForRoom, null, 2));

export const getMessagesForRoom = (roomId: string) => {
    return messages.filter(message => message.room.roomId === roomId);
}

export const addMessage = (roomId: string, newMessage: string) => {
    const room = rooms.find(room => room.roomId === roomId);
    if (!room) {
        return;
    }

    const newMessageObj: Message = {
        messageId: `${messages.length + 1}`,
        text: newMessage,
        createdAt: new Date(Date.now() + messages.length * 1000),
        user: currentUser,
        room: room
    };
    messages.push(newMessageObj);

    return newMessageObj;
}
