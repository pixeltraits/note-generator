export class NoteFinder {
    constructor(minNote, maxNote) {
        this.notes = [
            'C',
            'D',
            'E',
            'F',
            'G',
            'A',
            'B'
        ];
        this.alterations = [
            '',
            'b',
            '#'
        ];
        this.maxNote = maxNote;
        this.minNote = minNote;

        this.minNotes = this.notes.slice(
            0,
            this.notes.findIndex(note => note === this.minNote.substring(0, 1))
        );
        this.maxNotes = this.notes.slice(
            this.notes.findIndex(note => note === this.maxNote.substring(0, 1)),
            this.notes.length
        );
        this.maxOctave = 6;
        this.minOctave = 2;
        this.initNoteState();
    }

    generateNewNote() {
        this.computeNote();
        return this.changeNoteToString();
    }

    changeNoteToString() {
        let note = this.noteInfo.note;
        note += this.noteInfo.octave;
        note += this.noteInfo.alteration;

        return note;
    }

    computeNote() {
        this.getRandomNote();

        if (this.noteInfo.octave === this.minOctave) {
            if (
                this.minNotes.includes(this.noteInfo.note) ||
                (this.noteInfo.note === this.minNote.substring(0, 1) && this.noteInfo.alteration === 'b')
            ) {
                this.computeNote();
            }
        }

        if (this.noteInfo.octave === this.maxOctave) {
            if (
                this.maxNotes.includes(this.noteInfo.note) ||
                (this.noteInfo.note === this.maxNote.substring(0, 1) && this.noteInfo.alteration === '#')
            ) {
                this.computeNote();
            }
        }
    }

    getRandomNote() {
        this.initNoteState();

        this.noteInfo.note += this.getNote();
        this.noteInfo.octave += this.getOctave();
        this.noteInfo.alteration += this.getAlteration();
    }

    getNote() {
        return this.notes[this.getRandomInt(0, this.notes.length)];
    }

    getAlteration() {
        return this.alterations[this.getRandomInt(0, this.alterations.length)];
    }

    getOctave() {
        return this.getRandomInt(this.minOctave, this.maxOctave);
    }

    getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    initNoteState() {
        this.noteInfo = {
            note: '',
            octave: 0,
            alteration: ''
        };
    }

}