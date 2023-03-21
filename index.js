function findMatching(drivers, string) {
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
    return matchingDrivers;
}

function fuzzyMatch(drivers, str) {
    const matchingDrivers = drivers.filter(driver => driver.startsWith(str));
    return matchingDrivers;
}

function matchName(drivers, str) {
    const matchingDrivers = drivers.filter(driver => driver.name === str);
    return matchingDrivers;
}