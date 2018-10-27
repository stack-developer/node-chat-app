var socket = io();

        socket.on('connect', ()=>{
            console.log('Connected to Server');

            socket.emit('createMessage',{
                from:"harish",
                text:"hey, whats up",
                createdAt:"12/12/2018"
            });

        
        });

        socket.on('disconnect', ()=>{
            console.log('Disconnected from Server');
        });

        socket.on('newMessage',(message)=>{
            console.log('newMessage',message);
        });

       