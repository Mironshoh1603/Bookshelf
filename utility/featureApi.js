class FeatureApi {
  constructor(clientQuery, databaseQuery) {
    this.clientQuery = clientQuery;
    this.databaseQuery = databaseQuery;
  }
  // Filter
  filter() {
    let queryC = JSON.stringify(this.clientQuery);
    queryC = queryC.replace(/\bgt|gte|lte|lt\b/g, (val) => `$${val}`);
    let queryData = JSON.parse(queryC);
    this.databaseQuery = this.databaseQuery.find(queryData);
    return this;
  }
  //Sorting
  sorting() {
    if (this.clientQuery.sort) {
      let sortQuery = this.clientQuery.sort.split(",").join(" ");
      this.databaseQuery = this.databaseQuery.sort(sortQuery);
    } else {
      this.databaseQuery = this.databaseQuery.sort("-createdAt");
    }
    return this;
  }
  // Field
  field() {
    if (this.clientQuery.field) {
      let fieldQuery = this.clientQuery.field.split(",").join(" ");
      this.databaseQuery = this.databaseQuery.select(fieldQuery);
    } else {
      this.databaseQuery = this.databaseQuery.select("-__v");
    }
    return this;
  }
  // Pagination
  pagination() {
    const page = +this.clientQuery.page || 1;
    const limit = +this.clientQuery.limit || 100;
    this.databaseQuery = this.databaseQuery
      .skip((page - 1) * limit)
      .limit(limit);
    return this;
  }
}

module.exports = FeatureApi;
