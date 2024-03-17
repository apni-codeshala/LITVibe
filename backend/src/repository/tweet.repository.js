const Tweet = require("../models/tweet.model");

class TweetRepository{

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const tweets = await Tweet.find();
            return tweets;
        } catch (error) {
            console.log(error);
        }
    }

    async getById(id) {
        try {
            const tweet = await Tweet.find(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const response = await Tweet.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console,log(error);
        }
    }

    async update(tweetId, data) {
        try {
            const response = Tweet.findByIdAndUpdate(tweetId, data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = TweetRepository;