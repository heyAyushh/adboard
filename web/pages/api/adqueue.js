export default (req, res) => {
    res.statusCode = 200
    // res.json({
    //     adPublisher: 'John Doe',
    //     scheduledFor: '',
    //     scheduledTime: '',
    //     adBlob: 'https://images.unsplash.com/photo-1602961940072-8e9cca038955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2690&q=80',
    //     adType: "image"
    // })
    res.json({
        adPublisher: 'John Doe',
        scheduledFor: '',
        scheduledTime: '',
        adBlob: 'https://bliboard.blob.core.windows.net/notquite/Meet%20iPhone%2012%20%E2%80%94%20Apple.mp4',
        adType: "video"
    })
}