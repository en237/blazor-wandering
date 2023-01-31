<script>
    // the digest function is asynchronous, it returns a promise, we use the async/await syntax to simplify the code.
    async function fileHash(file){
        const arrayBuf = await file.arrayBuffer();

        // use the subtle crypto api to perform a sha256 sum of the file's array buffer
        // the resulting has is stored in an array buffer
        const hashAsArrayBuf = await crypto.subtle.digest('SHA-256', arrayBuf);

        // to display it as a string we will get the exadecimal value of each byte of the array buffer
        // this gets us an array where each byte of the array buffer becomes one item in the array
        const uint8ViewOfHash = new Uint8Array(hashAsArrayBuf);

        // we then convert it to a regular array so we can convert each item to hexadecimal strings
        // where two characters of 0-9 or a-f represent a number between 0 and 15 containing 4 bits of information, so 2 of them is 8 bits (1 byte).
        const hashAsString = Array.from(uint8ViewOfHash).map((b) => b.toString(16).padStart(2, '0')).join('');
        return  hashAsString;
    }

</script>
