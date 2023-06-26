# Welcome to TestCaseTracker editor

### Test case insert/update/delete
- [ ] Тест кэйсийг гараас оруулах боломжтой байна.  
- [ ] Тест кэйсийг засварлах боломжтой байна. 
- [ ] Тест кэйсийг устгах боломжтой байна.
- [ ] Тест кэйст харгалзах feature/subcase оруулдаг байна.

### Test case details:
- [ ] Тест кэйс ID(uniqie) байна. (field)
- [ ] Тест кэйс нэр (input)
- [ ] Тест кэйс description (input)
- [ ] Тест кэйс test steps (input) => (input) => (input)
- [ ] Тест кэйс expected result (input)
- [ ] Тест кэйс tested date (Date)
- [ ] Тест кэйс effort time хэмжигч (tracker/ run button/ stop button/ time field)
- [ ] Тест кэйс status (dropdown)
- [ ] Тест кэйс assign (dropdown & input)
- [ ] Тест кэйс tag (tag input)
- [ ] Тест кэйс total comment count (field)
- [ ] Тест кэйс comment (date/owner/input)
- [ ] Тест кэйс save button (button)
- [ ] Тест кэйс discard button (button)

### Bug details:
- [ ] Bug ID(uniqie) байна. (field)
- [ ] Bug нэр (input)
- [ ] Bug description (input)
- [ ] Bug root cause (dropdown/input)
- [ ] Bug expected result (input)
- [ ] Bug created date (Date)
- [ ] Bug state (dropdown)
- [ ] Bug assign (dropdown & input)
- [ ] Bug tag (tag input)
- [ ] Bug total comment count (field)
- [ ] Bug comment (date/owner/input)
- [ ] Bug priority (dropdown)
- [ ] Bug severity (dropdown)
- [ ] Bug save button (button)
- [ ] Bug discard button (button)


#### Item types types
- Project
  - ⤷ Feature
    - ⤷ Sub-feature
      - ⤷ Sub-feature
        - ⤷ Test case
          - ⤷ Bug
## APIs

- **`GET /api/v1/getAllProjects`** - Get all `Project`
- **`GET /api/v1/getProject?projectId=:id`** - Get `feature/Sub-feature/Sub-feature`  items of `Project`
- **`GET /api/v1/feature/getAll?featureId=:id`** - Get all items of `Sub-feature`
- **`GET /api/v1/item?itemType=:type&itemId:id`** - Get test item info
- **`PUT /api/v1/item?itemType=:type&itemId:id`** - Update test item info
- **`POST /api/v1/item?itemType=:type`** - Create item
- **`DELETE /api/v1/item?itemType=:type`** - Delete item
- **`POST /api/v1/item/addProgress?itemType=:Type&itemId=:id`**

## MongoDB

**Items:**

| Column          | type   |max length|min length| 
| -------------   |--------|----------|----------|
| id              | id     |          |          |
| type            | String |          |          |
| name            | String |          |          |
| description     | String |          |          |
| created_date    | Date   |          |          |
| Status          | String |          |          |
| Assign          | id     |          |          |
| tags            | list   |          |          |
| expected_result | string |          |          |
| total_comment   | int    |          |          |
| tested_date     | Date   |          |          |





# testCaseTracker
