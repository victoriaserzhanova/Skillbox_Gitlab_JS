let me = {
    birthDate: { year: 1989, month: 5, day: 20},
    getAge() {
        let now = new Date();
        let born = new Date(
            this.birthDate.year,
            this.birthDate.month + 1,
            this.birthDate.day
        );
        let diffinMilliseconds = now.getTime() - born.getTime();
        return Math.floor(diffinMilliseconds / 1000 / 60 / 60 / 24 / 365.25);
    }

};

console.log(me.getAge());