const NameUtil = {
    getFullNameByUniversity(university) {
        switch (university) {
            case "ТГУ" :
                return "Томский государственный университет"
            case "ТПУ" :
                return "Томский политехнический университет"
            case "ТУСУР" :
                return "Томский государственный университет систем управления и радиоэлектроники"
        }
    },
};

export default NameUtil;