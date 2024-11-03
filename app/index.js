import express from 'express';
import { NoteFinder } from "./noteFinder.js";
const app = express();

app.set('view engine', 'ejs');
app.set('views','app/views');
app.use('/styles', express.static('app/styles'));

app.get('/', function(req, res) {
    const noteFinder = new NoteFinder('E3', 'D6');
    let note = noteFinder.generateNewNote();

    res.render(
        'index',
        {
            note: note,
            reload: () => {
                note = noteFinder.generateNewNote();
            }
        }
    );
});
app.listen(4200);