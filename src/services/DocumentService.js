import axiosInstance from "./index";
import qs from "qs";

const DocumentService = {
    fetchDocument(universityId, number, firstName, secondName, spec, year) {
        return axiosInstance.post('/api/document',
            qs.stringify({
                'universityId': universityId,
                'number': number,
                'firstName': firstName,
                'secondName': secondName,
                'spec': spec,
                'year': year
            }))
            .then(document => {
                if (document && document.data) {
                    return document.data
                }
            })
    },
};

export default DocumentService;
