module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            description: String,
            size: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Property = mongoose.model("property", schema);
    return Property;
};