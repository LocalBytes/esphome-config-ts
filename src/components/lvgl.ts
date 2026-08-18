/**
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * 
 * Schema: lvgl.json 
 * Source: https://github.com/esphome/esphome/blob/dev/esphome/components/lvgl
 * 
 * This file is part of the ESPHome TypeScript Generator.
 * © Allport-IT Ltd (t/a Local Bytes)
 **/
import { type ID, type Pin, EsphomeComponent } from "@/lib/base.js";
import type { CoreCOMPONENT_SCHEMA } from "./esphome.js";
import type { BinarySensor_BINARY_SENSOR_SCHEMA } from "./binary_sensor.js";
import type { LightRGB_LIGHT_SCHEMA } from "./light.js";
import type { Number_NUMBER_SCHEMA } from "./number.js";
import type { Select_SELECT_SCHEMA } from "./select.js";
import type { Sensor_SENSOR_SCHEMA } from "./sensor.js";
import type { Switch_SWITCH_SCHEMA } from "./switch.js";
import type { Text_TEXT_SCHEMA } from "./text.js";
import type { TextSensor_TEXT_SENSOR_SCHEMA } from "./text_sensor.js";

export class Lvgl extends EsphomeComponent {
    componentName: string = "lvgl";
}

export interface LvglConfigAlignTo {
    align: string;
    id: ID;
    x?: any;
    y?: any;
}

export type LvglConfigByteOrder = 'big_endian' | 'little_endian';
export type LvglConfigChecked = LvglSTYLE_SCHEMA;
export type LvglConfigColorDepth = '16';
export type LvglConfigDisabled = LvglSTYLE_SCHEMA;
export type LvglConfigEdited = LvglSTYLE_SCHEMA;
export type LvglConfigEncoders = LvglENCODERS_CONFIG;
export type LvglConfigFocusKey = LvglSTYLE_SCHEMA;
export type LvglConfigFocused = LvglSTYLE_SCHEMA;
export type LvglConfigGradients = LvglGRADIENT_SCHEMA;
export type LvglConfigHovered = LvglSTYLE_SCHEMA;
export type LvglConfigKeypads = LvglKEYPADS_CONFIG;
export type LvglConfigLogLevel = 'VERBOSE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'NONE';
export type LvglConfigMain = LvglSTATE_SCHEMA;
export type LvglConfigPressed = LvglSTYLE_SCHEMA;
export type LvglConfigScrollbar = LvglSTATE_SCHEMA;
export type LvglConfigScrolled = LvglSTYLE_SCHEMA;
export type LvglConfigState = LvglSET_STATE_SCHEMA;

export interface LvglConfigStyleDefinitions extends LvglFULL_STYLE_SCHEMA {
    id: string;
}

export type LvglConfigWidgets = LvglWIDGET_TYPES;
export type LvglConfig = {
        adv_hittest?: any;
        align?: any;
        align_to?: LvglConfigAlignTo;
        align_to_lambda_id?: ID;
        anim_duration?: any;
        anim_time?: any;
        arc_color?: any;
        arc_opa?: any;
        arc_rounded?: any;
        arc_width?: any;
        base_dir?: any;
        bg_color?: any;
        bg_grad?: any;
        bg_grad_color?: any;
        bg_grad_dir?: any;
        bg_grad_opa?: any;
        bg_grad_stop?: any;
        bg_image_opa?: any;
        bg_image_recolor?: any;
        bg_image_recolor_opa?: any;
        bg_image_src?: any;
        bg_image_tiled?: any;
        bg_main_opa?: any;
        bg_main_stop?: any;
        bg_opa?: any;
        bitmap_mask_src?: any;
        blend_mode?: any;
        blur_backdrop?: any;
        blur_quality?: any;
        blur_radius?: any;
        border_color?: any;
        border_opa?: any;
        border_post?: any;
        border_side?: any;
        border_width?: any;
        bottom_layer?: any;
        buffer_size?: any;
        byte_order?: LvglConfigByteOrder;
        checkable?: any;
        checked?: LvglConfigChecked;
        click_focusable?: any;
        clickable?: any;
        clip_corner?: any;
        color_depth?: LvglConfigColorDepth;
        color_filter_opa?: any;
        default_font?: any;
        default_group?: ID;
        disabled?: LvglConfigDisabled;
        displays?: ID;
        draw_rounding?: number;
        drop_shadow_color?: any;
        drop_shadow_offset_x?: any;
        drop_shadow_offset_y?: any;
        drop_shadow_opa?: any;
        drop_shadow_quality?: any;
        drop_shadow_radius?: any;
        edited?: LvglConfigEdited;
        encoders?: LvglConfigEncoders;
        event_bubble?: any;
        ext_click_area?: any;
        floating?: any;
        focus_key?: LvglConfigFocusKey;
        focused?: LvglConfigFocused;
        full_refresh?: boolean;
        gesture_bubble?: any;
        gradients?: LvglConfigGradients;
        group?: ID;
        height?: any;
        hidden?: any;
        hovered?: LvglConfigHovered;
        id?: ID;
        ignore_layout?: any;
        image_opa?: any;
        image_recolor?: any;
        image_recolor_opa?: any;
        keypads?: LvglConfigKeypads;
        layout_1?: any;
        layout_2?: any;
        length?: any;
        line_color?: any;
        line_dash_gap?: any;
        line_dash_width?: any;
        line_opa?: any;
        line_rounded?: any;
        line_width?: any;
        log_level?: LvglConfigLogLevel;
        main?: LvglConfigMain;
        margin_bottom?: any;
        margin_left?: any;
        margin_right?: any;
        margin_top?: any;
        max_height?: any;
        max_width?: any;
        min_height?: any;
        min_width?: any;
        msgboxes?: any[];
        on_all_events?: object[];
        on_boot?: object[];
        on_cancel?: object[];
        on_change?: object[];
        on_child_change?: object[];
        on_child_create?: object[];
        on_child_delete?: object[];
        on_click?: object[];
        on_color_format_change?: object[];
        on_cover_check?: object[];
        on_create?: object[];
        on_defocus?: object[];
        on_delete?: object[];
        on_double_click?: object[];
        on_draw_end?: object[];
        on_draw_main?: object[];
        on_draw_main_begin?: object[];
        on_draw_main_end?: object[];
        on_draw_post?: object[];
        on_draw_post_begin?: object[];
        on_draw_post_end?: object[];
        on_draw_start?: object[];
        on_draw_task_add?: object[];
        on_flush_finish?: object[];
        on_flush_start?: object[];
        on_flush_wait_finish?: object[];
        on_flush_wait_start?: object[];
        on_focus?: object[];
        on_gesture?: object[];
        on_get_self_size?: object[];
        on_hit_test?: object[];
        on_hover_leave?: object[];
        on_hover_over?: object[];
        on_idle?: object[];
        on_indev_reset?: object[];
        on_insert?: object[];
        on_invalidate_area?: object[];
        on_key?: object[];
        on_layout_change?: object[];
        on_leave?: object[];
        on_long_press?: object[];
        on_long_press_repeat?: object[];
        on_pause?: object[];
        on_press?: object[];
        on_press_lost?: object[];
        on_pressing?: object[];
        on_ready?: object[];
        on_refr_ext_draw_size?: object[];
        on_refr_ready?: object[];
        on_refr_request?: object[];
        on_refr_start?: object[];
        on_refresh?: object[];
        on_release?: object[];
        on_render_ready?: object[];
        on_render_start?: object[];
        on_resolution_change?: object[];
        on_resume?: object[];
        on_rotary?: object[];
        on_screen_load?: object[];
        on_screen_load_start?: object[];
        on_screen_unload?: object[];
        on_screen_unload_start?: object[];
        on_scroll?: object[];
        on_scroll_begin?: object[];
        on_scroll_end?: object[];
        on_scroll_throw_begin?: object[];
        on_short_click?: object[];
        on_single_click?: object[];
        on_size_change?: object[];
        on_state_change?: object[];
        on_style_change?: object[];
        on_swipe_bottom?: object[];
        on_swipe_down?: object[];
        on_swipe_left?: object[];
        on_swipe_right?: object[];
        on_swipe_top?: object[];
        on_swipe_up?: object[];
        on_triple_click?: object[];
        on_update_layout_complete?: object[];
        on_vsync?: object[];
        on_vsync_request?: object[];
        opa?: any;
        opa_layered?: any;
        outline_color?: any;
        outline_opa?: any;
        outline_pad?: any;
        outline_width?: any;
        overflow_visible?: any;
        pad_all?: any;
        pad_bottom?: any;
        pad_left?: any;
        pad_radial?: any;
        pad_right?: any;
        pad_top?: any;
        page_wrap?: any;
        pages?: any[];
        press_lock?: any;
        pressed?: LvglConfigPressed;
        r_mod?: any;
        radial_offset?: any;
        radius?: any;
        recolor?: any;
        recolor_opa?: any;
        resume_on_input?: boolean;
        rotary_sensitivity?: any;
        rotation?: any;
        scroll_chain?: any;
        scroll_chain_hor?: any;
        scroll_chain_ver?: any;
        scroll_dir?: any;
        scroll_elastic?: any;
        scroll_momentum?: any;
        scroll_on_focus?: any;
        scroll_one?: any;
        scroll_snap_x?: any;
        scroll_snap_y?: any;
        scroll_with_arrow?: any;
        scrollable?: any;
        scrollbar?: LvglConfigScrollbar;
        scrollbar_mode?: any;
        scrolled?: LvglConfigScrolled;
        send_draw_task_events?: any;
        shadow_color?: any;
        shadow_offset_x?: any;
        shadow_offset_y?: any;
        shadow_ofs_x?: any;
        shadow_ofs_y?: any;
        shadow_opa?: any;
        shadow_spread?: any;
        shadow_width?: any;
        snappable?: any;
        state?: LvglConfigState;
        style_definitions?: LvglConfigStyleDefinitions[];
        styles?: ID[];
        text_align?: any;
        text_color?: any;
        text_decor?: any;
        text_font?: any;
        text_letter_space?: any;
        text_line_space?: any;
        text_opa?: any;
        text_outline_stroke_color?: any;
        text_outline_stroke_opa?: any;
        text_outline_stroke_width?: any;
        theme?: any;
        top_layer?: any;
        touchscreens?: any;
        transform_angle?: any;
        transform_height?: any;
        transform_pivot_x?: any;
        transform_pivot_y?: any;
        transform_rotation?: any;
        transform_scale?: any;
        transform_scale_x?: any;
        transform_scale_y?: any;
        transform_skew_x?: any;
        transform_skew_y?: any;
        transform_width?: any;
        transform_zoom?: any;
        translate_radial?: any;
        translate_x?: any;
        translate_y?: any;
        transparency_key?: any;
        update_interval?: any;
        update_when_display_idle?: boolean;
        user_1?: any;
        user_2?: any;
        user_3?: any;
        user_4?: any;
        widget_1?: any;
        widget_2?: any;
        widgets?: LvglConfigWidgets[];
        width?: any;
        x?: any;
        y?: any;
    } & CoreCOMPONENT_SCHEMA & LvglDISP_BG_SCHEMA;
export type LvglDISP_BG_SCHEMADispBgImage = 'none';

export interface LvglDISP_BG_SCHEMA {
    disp_bg_color?: any;
    disp_bg_image?: LvglDISP_BG_SCHEMADispBgImage;
    disp_bg_opa?: any;
}

export interface LvglENCODERS_CONFIGInitialFocus {
    id: ID;
}

export interface LvglENCODERS_CONFIGSensor {
    left_button: ID;
    right_button: ID;
}

export interface LvglENCODERS_CONFIG {
    enter_button: ID;
    group?: any;
    id?: ID;
    initial_focus?: LvglENCODERS_CONFIGInitialFocus[];
    long_press_repeat_time?: any;
    long_press_time?: any;
    sensor: LvglENCODERS_CONFIGSensor;
}

export interface LvglFULL_STYLE_SCHEMA {
    align?: any;
    anim_duration?: any;
    anim_time?: any;
    arc_color?: any;
    arc_opa?: any;
    arc_rounded?: any;
    arc_width?: any;
    base_dir?: any;
    bg_color?: any;
    bg_grad?: any;
    bg_grad_color?: any;
    bg_grad_dir?: any;
    bg_grad_opa?: any;
    bg_grad_stop?: any;
    bg_image_opa?: any;
    bg_image_recolor?: any;
    bg_image_recolor_opa?: any;
    bg_image_src?: any;
    bg_image_tiled?: any;
    bg_main_opa?: any;
    bg_main_stop?: any;
    bg_opa?: any;
    bitmap_mask_src?: any;
    blend_mode?: any;
    blur_backdrop?: any;
    blur_quality?: any;
    blur_radius?: any;
    border_color?: any;
    border_opa?: any;
    border_post?: any;
    border_side?: any;
    border_width?: any;
    clip_corner?: any;
    color_filter_opa?: any;
    drop_shadow_color?: any;
    drop_shadow_offset_x?: any;
    drop_shadow_offset_y?: any;
    drop_shadow_opa?: any;
    drop_shadow_quality?: any;
    drop_shadow_radius?: any;
    ext_click_area?: any;
    grid_cell_x_align?: any;
    grid_cell_y_align?: any;
    height?: any;
    image_opa?: any;
    image_recolor?: any;
    image_recolor_opa?: any;
    length?: any;
    line_color?: any;
    line_dash_gap?: any;
    line_dash_width?: any;
    line_opa?: any;
    line_rounded?: any;
    line_width?: any;
    margin_bottom?: any;
    margin_left?: any;
    margin_right?: any;
    margin_top?: any;
    max_height?: any;
    max_width?: any;
    min_height?: any;
    min_width?: any;
    opa?: any;
    opa_layered?: any;
    outline_color?: any;
    outline_opa?: any;
    outline_pad?: any;
    outline_width?: any;
    pad_all?: any;
    pad_bottom?: any;
    pad_column?: any;
    pad_left?: any;
    pad_radial?: any;
    pad_right?: any;
    pad_row?: any;
    pad_top?: any;
    r_mod?: any;
    radial_offset?: any;
    radius?: any;
    recolor?: any;
    recolor_opa?: any;
    rotary_sensitivity?: any;
    scroll_dir?: any;
    scroll_snap_x?: any;
    scroll_snap_y?: any;
    scrollbar_mode?: any;
    shadow_color?: any;
    shadow_offset_x?: any;
    shadow_offset_y?: any;
    shadow_ofs_x?: any;
    shadow_ofs_y?: any;
    shadow_opa?: any;
    shadow_spread?: any;
    shadow_width?: any;
    styles?: ID[];
    text_align?: any;
    text_color?: any;
    text_decor?: any;
    text_font?: any;
    text_letter_space?: any;
    text_line_space?: any;
    text_opa?: any;
    text_outline_stroke_color?: any;
    text_outline_stroke_opa?: any;
    text_outline_stroke_width?: any;
    transform_angle?: any;
    transform_height?: any;
    transform_pivot_x?: any;
    transform_pivot_y?: any;
    transform_rotation?: any;
    transform_scale?: any;
    transform_scale_x?: any;
    transform_scale_y?: any;
    transform_skew_x?: any;
    transform_skew_y?: any;
    transform_width?: any;
    transform_zoom?: any;
    translate_radial?: any;
    translate_x?: any;
    translate_y?: any;
    width?: any;
    x?: any;
    y?: any;
}

export type LvglGRADIENT_SCHEMADirection = 'HOR' | 'HORIZONTAL' | 'VER' | 'VERTICAL';

export interface LvglGRADIENT_SCHEMA {
    direction: LvglGRADIENT_SCHEMADirection;
    dither?: any;
    id?: ID;
    stops: string;
}

export interface LvglKEYPADS_CONFIGInitialFocus {
    id: ID;
}

export interface LvglKEYPADS_CONFIG {
}

export class LvglBinarySensor extends EsphomeComponent<LvglBinarySensorConfig> {
    componentName: string = "lvgl.binary_sensor";
}

export interface LvglBinarySensorConfig extends BinarySensor_BINARY_SENSOR_SCHEMA {
    id?: any;
    state?: any;
    widget: ID;
}

export class LvglLight extends EsphomeComponent<LvglLightConfig> {
    componentName: string = "lvgl.light";
}

export interface LvglLightConfig extends LightRGB_LIGHT_SCHEMA {
    gamma_correct?: any;
    output_id?: ID;
    widget: ID;
}

export class LvglNumber extends EsphomeComponent<LvglNumberConfig> {
    componentName: string = "lvgl.number";
}

export type LvglNumberConfigTrigger = 'on_change' | 'on_update' | 'on_value' | 'on_release';

export interface LvglNumberConfig extends Number_NUMBER_SCHEMA {
    animated?: any;
    id?: ID;
    restore_value?: boolean;
    trigger?: LvglNumberConfigTrigger;
    update_on_release?: boolean;
    widget: ID;
}

export class LvglSelect extends EsphomeComponent<LvglSelectConfig> {
    componentName: string = "lvgl.select";
}

export interface LvglSelectConfig extends Select_SELECT_SCHEMA {
    animated?: boolean;
    id?: any;
    restore_value?: boolean;
    widget: ID;
}

export class LvglSensor extends EsphomeComponent<LvglSensorConfig> {
    componentName: string = "lvgl.sensor";
}

export type LvglSensorConfigTrigger = 'on_change' | 'on_update' | 'on_value' | 'on_release';

export interface LvglSensorConfig extends Sensor_SENSOR_SCHEMA {
    id?: any;
    trigger?: LvglSensorConfigTrigger;
    widget: ID;
}

export class LvglSwitch extends EsphomeComponent<LvglSwitchConfig> {
    componentName: string = "lvgl.switch";
}

export interface LvglSwitchConfig extends Switch_SWITCH_SCHEMA {
    id?: ID;
    widget: ID;
}

export class LvglText extends EsphomeComponent<LvglTextConfig> {
    componentName: string = "lvgl.text";
}

export interface LvglTextConfig extends Text_TEXT_SCHEMA {
    id?: any;
    widget: ID;
}

export class LvglTextSensor extends EsphomeComponent<LvglTextSensorConfig> {
    componentName: string = "lvgl.text_sensor";
}

export interface LvglTextSensorConfig extends TextSensor_TEXT_SENSOR_SCHEMA {
    id?: any;
    widget: ID;
}
