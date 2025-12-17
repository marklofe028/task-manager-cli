class Task {
    constructor(id, title, description, status = 'pending', createdAt = new Date()) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = new Date();
    }

    complete() {
        this.status = 'completed';
        this.updatedAt = new Date();
    }

    updateDetails(title, description) {
        this.title = title;
        this.description = description;
        this.updatedAt = new Date();
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            status: this.status,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }

    static fromJSON(json) {
        return new Task(
            json.id,
            json.title,
            json.description,
            json.status,
            new Date(json.createdAt)
        );
    }
}
module.exports = Task;