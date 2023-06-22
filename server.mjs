import express from 'express'
// import cors from 'cors'
import path from 'path'
const __dirname = path.resolve()

const app = express()
    // app.use(cors())

app.get('/cricket/:year', (req, res) => {
    let cricketData = {
        2023: { 
            date: ['15 FEB',],
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(60 Overs)',
            winner: 'West Indies',
            captain: 'Cleve Lloyds',
            runnerUP: 'Australia',
            host: 'England'
        
        },
        2024: {
            year: '1979',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(60 Overs)',
            winner: 'West Indies',
            captain: 'Cleve Lloyds',
            runnerUP: 'England',
            host: 'England'
        },
        2025: {
            year: '1983',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(60 Overs)',
            winner: 'India',
            captain: 'Kapil Dev',
            runnerUP: 'West Indies',
            host: 'England'
        },
        2026: {
            year: '1987',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(60 Overs)',
            winner: 'Australia',
            captain: 'Allan Border',
            runnerUP: 'England',
            host: 'Pakistan & India'
        },
        2027: {
            year: '1992',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(50 Overs)',
            winner: 'Pakistan',
            captain: 'Imran Khan',
            runnerUP: 'England',
            host: 'Australia'
        },
        2028: {
            year: '1996',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(50 Overs)',
            winner: 'SriLanka',
            captain: 'Arjuna Ranatunga',
            runnerUP: 'Australia',
            host: 'Pakistan, India & Srilanka'
        },
        2029: {
            year: '1998',
            tournament: 'ICC Champions Trophy',
            format: 'ODI(50 Overs)',
            winner: 'South Africa',
            captain: 'Hansie Cronje',
            runnerUP: 'West Indies',
            host: 'Bangladesh'
        },
        2030: {
            year: '1999',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(50 Overs)',
            winner: 'Australia',
            captain: 'Steve Waugh',
            runnerUP: 'Pakistan',
            host: 'England, Wales, Scotland & Ireland'
        },
        
    };
    let userInputYear = req.params.year;
    let cricketDataToSend = cricketData[userInputYear];

    if (cricketDataToSend) {
        res.send(cricketDataToSend);
    } else {
        res.status(404).send(`No ICC Tournament in ${req.params.year}`);
    }
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
