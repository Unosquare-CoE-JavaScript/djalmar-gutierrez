Feature: Toggle task

    In order to keep track of what i did
    As a user
    I want to bre able to toggle task from undone to done

    Scenario: Tasks are undone by default
        When Max adds the task "buy apples"
        Then the task "buy apples" should be set to undone

    Scenario: Toggle the task to done
        Given Max has added a task "buy apples"
        When Max toggles the task "buy apples"
        Then the task "buy apples" should be set to done