Feature: Delete task

    In order to remove a task
    As a user
    I want to be able to delete a task

    Scenario: Delete an existing task
        Given Max has added a task "buy apples"
        When Max deletes the task "buy apples"
        Then The task "buy apples" should not be in the task list

    