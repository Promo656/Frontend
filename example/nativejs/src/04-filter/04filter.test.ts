
test("Old mans", () => {
    const ages = [12, 34, 45, 9, 134, 1, 85]
    const oldAges = ages.filter(age=>age>90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(134)
})

test("Cheap courses", () => {
    const courses = [
        {title: "CSS", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150}
    ]

    const cheapCourse = courses.filter(course=>course.price<160)
    expect(cheapCourse.length).toBe(2)
    expect(cheapCourse[0].title).toBe("CSS")
    expect(cheapCourse[1].title).toBe("React")
})

test("GEt only complited tasks", ()=>{
    let tasks=[
        {id:1, title:"Potato",isDone:false},
        {id:2, title:"Cofe",isDone:true},
        {id:3, title:"Cola",isDone:false},
        {id:4, title:"Bread",isDone:true}
    ]
    let complitTasks=tasks.filter(t=>t.isDone)

    expect(complitTasks.length).toBe(2)
    expect(complitTasks[0].id).toBe(2)
    expect(complitTasks[1].id).toBe(4)
    expect(complitTasks[0].title).toBe("Cofe")
    expect(complitTasks[1].title).toBe("Bread")
})

test("GEt only uncomplited tasks", ()=>{
    let tasks=[
        {id:1, title:"Potato",isDone:false},
        {id:2, title:"Cofe",isDone:true},
        {id:3, title:"Cola",isDone:false},
        {id:4, title:"Bread",isDone:true}
    ]
    let complitTasks=tasks.filter(t=>!t.isDone)

    expect(complitTasks.length).toBe(2)
    expect(complitTasks[0].id).toBe(1)
    expect(complitTasks[1].id).toBe(3)
    expect(complitTasks[0].title).toBe("Potato")
    expect(complitTasks[1].title).toBe("Cola")
})