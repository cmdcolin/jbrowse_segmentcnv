define([
    'dojo/_base/declare',
    'dojo/_base/array',
    'JBrowse/Util',
    'JBrowse/Store/SeqFeature',
    'JBrowse/Model/SimpleFeature',
    'JBrowse/Model/XHRBlob',
    'JBrowse/Model/BlobFilehandleWrapper'

],
function (
    declare,
    array,
    Util,
    SeqFeatureStore,
    SimpleFeature,
    XHRBlob,
    BlobFilehandleWrapper
) {
    return declare([ SeqFeatureStore ], {

        constructor(args) {
            this.blob = new BlobFilehandleWrapper(
                new XHRBlob(
                    this.resolveUrl(
                        this.getConf('urlTemplate', [])
                    )
                )
            );
        },

        getGlobalStats(callback /* , errorCallback */) {
            callback({});
        },

        async getFeatures(query, featureCallback, finishCallback, errorCallback) {
            try {
                const res = await this.blob.readFile();
                // const result = await res.text();
                console.log(res);
                finishCallback();
            } catch (e) {
                errorCallback(e);
            }
        }
    });
});
