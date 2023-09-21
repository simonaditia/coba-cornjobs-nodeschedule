// setInterval(() => {
//     console.log("Running a task every second")
// }, 1000)

const schedule = require("node-schedule")

// const job = schedule.scheduleJob("* * * * * *", () => {
//     console.log("Running a task every second.")
// })

// Running on every 54 min
// const job = schedule.scheduleJob("54 * * * *", () => {
//     console.log("Running a task min 54")
// })

// const job = schedule.scheduleJob("* * * * * * ", (fireDate) => {
//     console.log(`This job was supposed to run at ${fireDate}, but actually run at ${new Date()}`)
// })

// const date = new Date(2023, 8, 21, 12, 4, 0) // month (january) = 0, (december) = 11
// const job = schedule.scheduleJob(date, () => {
//     console.log("Running at the specific date and time given.")
// })

// Specific Recurrance Rule Scheduling
// Run every 10 minutes after the hour
// const rule = new schedule.RecurrenceRule()
// console.log(rule)
// rule.minute = 10
// console.log(rule.minute)
// const job = schedule.scheduleJob(rule, () => {
//     console.log("Running every 10th min after the hour.")
// })

// const job = schedule.scheduleJob({
//     hour: 12,
//     minute: 21,
//     second: 5,
//     dayOfWeek: 4
// }, () => {
//     console.log("It's the time!")
// })

// const startTime = new Date(Date.now() + 5000)
// const endTime = new Date(startTime.getTime() + 5000)
// const job = schedule.scheduleJob({
//     start: startTime,
//     end: endTime,
//     rule: "*/1 * * * * *"
// }, () => {
//     console.log("It's the time!")
// })
// */1: in this case meaning every 1 second

const job = schedule.scheduleJob("* * * * * *", () => {
    console.log("Running a task every second")
})
setInterval(() => {
    schedule.gracefulShutdown()
    console.log("Graceful shutdown")
    process.exit(0)
}, 10000)