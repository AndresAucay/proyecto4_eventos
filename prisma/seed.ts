    import { PrismaClient } from '@prisma/client';


    const prisma = new PrismaClient();

    async function main() {
    try {

        const event1 = await prisma.event.create({
        data: {
            eventName: 'Concierto',
            eventDate: new Date('2023-07-15'),
            eventLocation: 'Estadio XYZ',
            totalTickets: 1000,
            ticketsRemaining: 500,
        },
        });

        const event2 = await prisma.event.create({
        data: {
            eventName: 'Feria',
            eventDate: new Date('2023-08-20'),
            eventLocation: 'Parque ABC',
            totalTickets: 2000,
            ticketsRemaining: 1500,
        },
        });

    
        console.log({ event1, event2 });
    } catch (error) {
        console.error(error);
    } finally {
        
        await prisma.$disconnect();
    }
    }

    main();
