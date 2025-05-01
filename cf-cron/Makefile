SUPERCRONIC_URL = https://github.com/aptible/supercronic/releases/download/v0.2.33/supercronic-linux-amd64
SUPERCRONIC_SHA1SUM = 71b0d58cc53f6bd72cf2f293e09e294b79c666d8 

supercronic:
	curl --fail --silent --location  --show-error -o $@ ${SUPERCRONIC_URL} 
	echo "${SUPERCRONIC_SHA1SUM} $@" | sha1sum -c - || rm $@
	chmod +x $@
	
