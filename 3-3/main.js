const max = process.argv[2];
        let star = ["*"]
        ;

        for ( i = 0; i < max; i++) {
            for( j = 0; j < max-i; j++) {
                console.log(" ");
            }
            for( k = 0; k <= (i*2); k++) {
                console.log(star);
            }
            console.log("\n");
       }


    
