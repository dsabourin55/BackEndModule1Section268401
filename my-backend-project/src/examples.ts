// Primary data type annotations
let projectName: string = "Backend API";
let version: number = 1.0;
let isActive: boolean = true;
let tags: string[] = ["api", "backend", "typescript"];

/**
 * Calculates the uptime percentage based on total and downtime hours
 * @param totalHours - Total hours in the period
 * @param downtimeHours - Hours the system was down
 * @returns The uptime percentage as a number
 */
const calculateUptime = (totalHours: number, downtimeHours: number): number => {
    if (totalHours <= 0) {
        return 0;
    }

    const uptime = ((totalHours - downtimeHours) / totalHours) * 100;
    return Math.round(uptime * 100) / 100; // Round to 2 decimal places
}

/**
 * Determines the service status based on uptime percentage
 * @param uptimePercentage - The uptime percentage
 * @returns A status string indicating service health
 */
const getServiceStatus = (uptimePercentage: number): string => {
    switch (true) {
        case uptimePercentage >= 99.9:
            return "excellent";
        case uptimePercentage >= 99.0:
            return "good";
        case uptimePercentage >= 95.0:
            return "acceptable";
        default:
            return "poor";
    }
}

// Example usage
const uptime: number = calculateUptime(720, 2); // 720 hours in a month, 2 hours downtime
const statusTest: string = getServiceStatus(uptime);

console.log(`Uptime: ${uptime}%, Status: ${statusTest}`);