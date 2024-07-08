export const eventTheaterChoices = [
  {
    type: '活动曲',
    pt: 537,
    token: -180,
  },
  {
    type: 'MM 每日推荐曲',
    multiplier: '450 打工票',
    pt: 1071,
    token: 1071,
    anniversaryOnly: true,
  },
  {
    name: 'MM / OM 普通曲',
    multiplier: '450 打工票',
    pt: 893,
    token: 893,
    anniversaryOnly: true,
  },
  {
    name: 'MM / OM通常曲',
    multiplier: '300打工票',
    pt: 595,
    token: 595,
  },
  {
    name: 'MM 每日推荐曲，1倍体力',
    pt: 102,
    token: 102,
    anniversaryOnly: true,
  },
  {
    type: 'MM / OM 通常曲',
    multiplier: '一倍体力',
    pt: 85,
    token: 85,
  },
  {
    type: '6M 通常曲',
    multiplier: '一倍体力',
    pt: 64,
    token: 64,
  },
  {
    type: '2M+ 通常曲',
    multiplier: '一倍体力',
    pt: 62,
    token: 62,
  },
  {
    type: '4M 通常曲',
    multiplier: '一倍体力',
    pt: 49,
    token: 49,
  },
  {
    type: '2M 通常曲',
    multiplier: '一倍体力',
    pt: 35,
    token: 35,
  },
];

export const eventTheaterStaminaToTokenChoices = [
  {
    name: 'MM / OM 通常曲，1倍体力',
    pt: 85,
    token: 85,
  },
  {
    name: '6M 通常曲，1倍体力',
    pt: 64,
    token: 64,
  },
  {
    name: '2M+（solo）通常曲，1倍体力',
    pt: 62,
    token: 62,
  },
  {
    name: '4M 通常曲，1倍体力',
    pt: 49,
    token: 49,
  },
  {
    name: '2M 通常曲，1倍体力',
    pt: 35,
    token: 35,
  },
];

export const eventTheaterTicketToTokenChoices = [
  {
    name: 'MM / OM通常曲，300打工票',
    pt: 595,
    token: 595,
  },
];

export const eventTheaterTokenToPtChoices = [
  {
    name: '活动曲，4倍',
    pt: 2148,
    token: -720,
  },
  {
    name: '活动曲，1倍',
    pt: 537,
    token: -180,
  },
];

export const levelToMaxStaminaTable = [
  60, 60, 61, 61, 62, 62, 63, 63, 64, 64, 65, 65, 66, 66, 67, 67, 68, 68, 69, 69, 70, 70, 71, 71,
  72, 72, 73, 73, 74, 74, 75, 75, 76, 76, 77, 77, 78, 78, 79, 79, 80, 80, 81, 81, 82, 82, 83, 83,
  84, 84, 85, 85, 86, 86, 87, 87, 88, 88, 89, 89, 90, 90, 90, 91, 91, 91, 92, 92, 92, 93, 93, 93,
  94, 94, 94, 95, 95, 95, 96, 96, 96, 97, 97, 97, 98, 98, 98, 99, 99, 99, 100, 100, 100, 101, 101,
  101, 102, 102, 102, 103, 103, 103, 104, 104, 104, 105, 105, 105, 106, 106, 106, 107, 107, 107,
  108, 108, 108, 109, 109, 109, 110, 110, 110, 111, 111, 111, 112, 112, 112, 113, 113, 113, 114,
  114, 114, 115, 115, 115, 116, 116, 116, 117, 117, 117, 118, 118, 118, 119, 119, 119, 120, 120,
  120, 120, 121, 121, 121, 121, 122, 122, 122, 122, 123, 123, 123, 123, 124, 124, 124, 124, 125,
  125, 125, 125, 126, 126, 126, 126, 127, 127, 127, 127, 128, 128, 128, 128, 129, 129, 129, 129,
  130, 130, 130, 130, 131, 131, 131, 131, 132, 132, 132, 132, 133, 133, 133, 133, 134, 134, 134,
  134, 135, 135, 135, 135, 136, 136, 136, 136, 137, 137, 137, 137, 138, 138, 138, 138, 139, 139,
  139, 139, 140, 140, 140, 140, 141, 141, 141, 141, 142, 142, 142, 142, 143, 143, 143, 143, 144,
  144, 144, 144, 145, 145, 145, 145, 146, 146, 146, 146, 147, 147, 147, 147, 148, 148, 148, 148,
  149, 149, 149, 149, 150, 150, 150, 150, 151, 151, 151, 151, 152, 152, 152, 152, 153, 153, 153,
  153, 154, 154, 154, 154, 155, 155, 155, 155, 156, 156, 156, 156, 157, 157, 157, 157, 158, 158,
  158, 158, 159, 159, 159, 159, 160, 160, 160, 160, 161, 161, 161, 161, 162, 162, 162, 162, 163,
  163, 163, 163, 164, 164, 164, 164, 165, 165, 165, 165, 166, 166, 166, 166, 167, 167, 167, 167,
  168, 168, 168, 168, 169, 169, 169, 169, 170, 170, 170, 170, 171, 171, 171, 171, 172, 172, 172,
  172, 173, 173, 173, 173, 174, 174, 174, 174, 175, 175, 175, 175, 176, 176, 176, 176, 177, 177,
  177, 177, 178, 178, 178, 178, 179, 179, 179, 179, 180, 180, 180, 180, 181, 181, 181, 181, 182,
  182, 182, 182, 183, 183, 183, 183, 184, 184, 184, 184, 185, 185, 185, 185, 186, 186, 186, 186,
  187, 187, 187, 187, 188, 188, 188, 188, 189, 189, 189, 189, 189, 190, 190, 190, 190, 190, 191,
  191, 191, 191, 191, 192, 192, 192, 192, 192, 193, 193, 193, 193, 193, 194, 194, 194, 194, 194,
  195, 195, 195, 195, 195, 196, 196, 196, 196, 196, 197, 197, 197, 197, 197, 198, 198, 198, 198,
  198, 199, 199, 199, 199, 199, 200, 200, 200, 200, 200, 201, 201, 201, 201, 201, 202, 202, 202,
  202, 202, 203, 203, 203, 203, 203, 204, 204, 204, 204, 204, 205, 205, 205, 205, 205, 206, 206,
  206, 206, 206, 207, 207, 207, 207, 207, 208, 208, 208, 208, 208, 209, 209, 209, 209, 209, 210,
  210, 210, 210, 210, 211, 211, 211, 211, 211, 212, 212, 212, 212, 212, 213, 213, 213, 213, 213,
  214, 214, 214, 214, 214, 215, 215, 215, 215, 215, 216, 216, 216, 216, 216, 217, 217, 217, 217,
  217, 218, 218, 218, 218, 218, 219, 219, 219, 219, 219, 220, 220, 220, 220, 220, 221, 221, 221,
  221, 221, 221, 222, 222, 222, 222, 222, 222, 223, 223, 223, 223, 223, 223, 224, 224, 224, 224,
  224, 224, 225, 225, 225, 225, 225, 225, 226, 226, 226, 226, 226, 226, 227, 227, 227, 227, 227,
  227, 228, 228, 228, 228, 228, 228, 229, 229, 229, 229, 229, 229, 230, 230, 230, 230, 230, 230,
  231, 231, 231, 231, 231, 231, 232, 232, 232, 232, 232, 232, 233, 233, 233, 233, 233, 233, 234,
  234, 234, 234, 234, 234, 235, 235, 235, 235, 235, 235, 236, 236, 236, 236, 236, 236, 237, 237,
  237, 237, 237, 237, 238, 238, 238, 238, 238, 238, 239, 239, 239, 239, 239, 239, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
  240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240, 240,
];
