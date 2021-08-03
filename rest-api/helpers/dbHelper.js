module.exports.formatMongoData = data => {
    if (Array.isArray(data)) {
        return data.map(d => d.toObject());
    }
    return data.toObject();
}