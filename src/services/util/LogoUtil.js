const LogoUtil = {
    getLogoByName(university) {
        switch (university) {
            case "ТГУ" :
                return "images/tsu_logo.png"
            case "ТПУ" :
                return "images/tpu_logo.jpg"
        }
    },
    getSmallLogoByName(university) {
        switch (university) {
            case "ТГУ" :
                return "images/tsu_logo_small.png"
            case "ТПУ" :
                return "images/tpu_logo_small.jpg"
        }
    },
};

export default LogoUtil;
