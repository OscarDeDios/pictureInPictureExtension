(function(){
	const pipVideo = document.querySelector('video')

	if (pipVideo) {
		managePipVideo(pipVideo, document)
	} else {
		const iframesList = document.querySelectorAll('iframe')

		for (iframe of iframesList) {
			if (iframe.contentDocument) {
				const videoIframe = iframe.contentDocument.body.querySelector('video')

				if (videoIframe) {
					managePipVideo(videoIframe, iframe.contentDocument)
				}
			}
		}
	}

	function managePipVideo (video, context) {
		const isVideoInPip = context.pictureInPictureElement === context.querySelector('video')

		isVideoInPip ? context.exitPictureInPicture() : video.requestPictureInPicture()
	}

}())
