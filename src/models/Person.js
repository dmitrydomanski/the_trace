export default class Person {
    constructor(id, firstName, lastName, gender, maidenName,
        matrimonialStatus, birthDate, deathDate, parentId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.maidenName = maidenName;
        this.matrimonialStatus = matrimonialStatus;
        this.birthDate = birthDate;
        this.deathDate = deathDate;
        this.parentId = parentId;
    }
}
