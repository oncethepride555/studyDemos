function versionManager (version) {
    versions = version.split('.');
    major();
    function patch() {
        versions[2]++;
        return versions;
    }
    function minor() {
        versions[1]++;
        versions[2] = 0;
        return versions;
    }
    function major() {
        var m = versions[0].split('');
        m[1]++;
        versions[0] = m.join('');
        versions[1] = 0;
        versions[2] = 0;
        return versions;
    }
    function rollback() {

    }
    return versions;
}
var version = "v0.11.12";
console.log(versionManager(version));