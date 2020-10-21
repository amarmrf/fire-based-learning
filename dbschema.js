let db = {
    listings: [
        {
            userHandle: "user",
            body: "this is the listing body",
            createdAt: "2020-10-1ST11:46:01.0182",
            likeCount: 5,
            reviewCount: 2
            //we dont want read comment to count it, because expensive
            //if we store the data like this, the read can be reduced
        }
    ]
}