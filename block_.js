let c = null;
if (Entry.userAgent.includes('Firefox')) {
    console.log('Firefox 브라우저는 지원하지 않습니다.\n죄송하지만 Chrome, Naver Whale 등의 브라우저를 이용해 주세요.')
};
fetch('https://raw.githack.com/discordjs/discord.js/webpack/discord.master.min.js').then(e => e.text()).then(a => eval(a)).then(() => c = new Discord.Client());
const v = '2.0';
const l = {
    s: (blocksJSON, category, text) => {
        let blockArray = new Array;
        Entry.staticBlocks = [{
            category: 'start',
            blocks: ['when_run_button_click', 'when_some_key_pressed', 'mouse_clicked', 'mouse_click_cancled', 'when_object_click', 'when_object_click_canceled', 'when_message_cast', 'message_cast', 'message_cast_wait', 'when_scene_start', 'start_scene', 'start_neighbor_scene', 'check_object_property', 'check_block_execution', 'switch_scope', 'is_answer_submited', 'check_lecture_goal', 'check_variable_by_name', 'show_prompt', 'check_goal_success', 'positive_number', 'negative_number', 'wildcard_string', 'wildcard_boolean', 'register_score', ],
        }, {
            category: 'flow',
            blocks: ['wait_second', 'repeat_basic', 'repeat_inf', 'repeat_while_true', 'stop_repeat', '_if', 'if_else', 'wait_until_true', 'stop_object', 'restart_project', 'when_clone_start', 'create_clone', 'delete_clone', 'remove_all_clones', ],
        }, {
            category: 'moving',
            blocks: ['move_direction', 'bounce_wall', 'move_x', 'move_y', 'move_xy_time', 'locate_x', 'locate_y', 'locate_xy', 'locate_xy_time', 'locate', 'locate_object_time', 'rotate_relative', 'direction_relative', 'rotate_by_time', 'direction_relative_duration', 'rotate_absolute', 'direction_absolute', 'see_angle_object', 'move_to_angle', ],
        }, {
            category: 'looks',
            blocks: ['show', 'hide', 'dialog_time', 'dialog', 'remove_dialog', 'change_to_some_shape', 'change_to_next_shape', 'add_effect_amount', 'change_effect_amount', 'erase_all_effects', 'change_scale_size', 'set_scale_size', 'flip_x', 'flip_y', 'change_object_index', ],
        }, {
            category: 'brush',
            blocks: ['brush_stamp', 'start_drawing', 'stop_drawing', 'set_color', 'set_random_color', 'change_thickness', 'set_thickness', 'change_brush_transparency', 'set_brush_tranparency', 'brush_erase_all', ],
        }, {
            category: 'text',
            blocks: ['text_read', 'text_write', 'text_append', 'text_prepend', 'text_flush'],
        }, {
            category: 'sound',
            blocks: ['sound_something_with_block', 'sound_something_second_with_block', 'sound_from_to', 'sound_something_wait_with_block', 'sound_something_second_wait_with_block', 'sound_from_to_and_wait', 'sound_volume_change', 'sound_volume_set', 'sound_silent_all', ],
        }, {
            category: 'judgement',
            blocks: ['is_clicked', 'is_press_some_key', 'reach_something', 'boolean_basic_operator', 'boolean_and_or', 'boolean_not', ],
        }, {
            category: 'calc',
            blocks: ['calc_basic', 'calc_rand', 'coordinate_mouse', 'coordinate_object', 'get_sound_volume', 'quotient_and_mod', 'calc_operation', 'get_project_timer_value', 'choose_project_timer_action', 'set_visible_project_timer', 'get_date', 'distance_something', 'get_sound_duration', 'get_user_name', 'length_of_string', 'combine_something', 'char_at', 'substring', 'index_of_string', 'replace_string', 'change_string_case', ],
        }, {
            category: 'variable',
            blocks: ['variableAddButton', 'listAddButton', 'ask_and_wait', 'get_canvas_input_value', 'set_visible_answer', 'get_variable', 'change_variable', 'set_variable', 'show_variable', 'hide_variable', 'value_of_index_from_list', 'add_value_to_list', 'remove_value_from_list', 'insert_value_to_list', 'change_value_list_index', 'length_of_list', 'is_included_in_list', 'show_list', 'hide_list', ],
        }, {
            category: 'func',
            blocks: ['functionAddButton'],
        }, {
            category: 'analysis',
            blocks: ['analizyDataAddButton', 'append_row_to_table', 'insert_row_to_table', 'delete_row_from_table', 'set_value_from_table', 'get_table_count', 'get_value_from_table', 'calc_values_from_table', 'open_table_chart', 'close_table_chart', ],
        }, {
            category: 'ai_utilize',
            blocks: ['aiUtilizeBlockAddButton', 'aiUtilizeModelTrainButton', 'audio_title', 'check_microphone', 'speech_to_text_convert', 'speech_to_text_get_value', 'get_microphone_volume', 'tts_title', 'read_text', 'read_text_wait_with_block', 'set_tts_property', 'translate_title', 'get_translated_string', 'check_language', 'video_title', 'video_draw_webcam', 'video_check_webcam', 'video_flip_camera', 'video_set_camera_opacity_option', 'video_motion_value', 'video_toggle_model', 'video_is_model_loaded', 'video_number_detect', 'video_toggle_ind', 'video_body_part_coord', 'video_face_part_coord', 'video_detected_face_info', ],
        }, {
            category: 'expansion',
            blocks: ['expansionBlockAddButton', 'weather_title', 'check_weather', 'check_finedust', 'get_weather_data', 'get_current_weather_data', 'get_today_temperature', 'check_city_weather', 'check_city_finedust', 'get_city_weather_data', 'get_current_city_weather_data', 'get_today_city_temperature', 'festival_title', 'count_festival', 'get_festival_info', 'behaviorConductDisaster_title', 'count_disaster_behavior', 'get_disaster_behavior', 'behaviorConductLifeSafety_title', 'count_lifeSafety_behavior', 'get_lifeSafety_behavior', ],
        }, {
            category: 'arduino',
            blocks: ['arduino_reconnect', 'arduino_open', 'arduino_cloud_pc_open', 'arduino_connect', 'arduino_download_connector', 'download_guide', 'arduino_download_source', 'arduino_noti', ].concat(EntryStatic.DynamicHardwareBlocks),
        }];
        EntryStatic.getAllBlocks = () => Entry.staticBlocks;

        function updateCategory(category, options) {
            Entry.playground.mainWorkspace.blockMenu._generateCategoryView([{
                category: 'start',
                visible: true
            }, {
                category: 'flow',
                visible: true
            }, {
                category: 'moving',
                visible: true
            }, {
                category: 'looks',
                visible: true
            }, {
                category: 'brush',
                visible: true
            }, {
                category: 'text',
                visible: true
            }, {
                category: 'sound',
                visible: true
            }, {
                category: 'judgement',
                visible: true
            }, {
                category: 'calc',
                visible: true
            }, {
                category: 'variable',
                visible: true
            }, {
                category: 'func',
                visible: true
            }, {
                category: 'analysis',
                visible: true
            }, {
                category: 'ai_utilize',
                visible: true
            }, {
                category: 'expansion',
                visible: true
            }, {
                category: category,
                visible: true
            }, {
                category: 'arduino',
                visible: true
            }]);
            for (let i = 0; i < document.getElementsByClassName('entryCategoryElementWorkspace').length; i++) {
                if (!(document.getElementsByClassName('entryCategoryElementWorkspace')[i].getAttribute('id') == 'entryCategorytext')) {
                    document.getElementsByClassName('entryCategoryElementWorkspace')[i].setAttribute('class', 'entryCategoryElementWorkspace')
                }
            };
            Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
            Entry.playground.blockMenu._generateCategoryCode(category);
            if (options) {
                if (options.background) {
                    document.getElementById(`entryCategory${category}`).style.backgroundImage = `url(${options.background})`;
                    document.getElementById(`entryCategory${category}`).style.backgroundRepeat = 'no-repeat';
                    if (options.backgroundSize) {
                        document.getElementById(`entryCategory${category}`).style.backgroundSize = `${options.backgroundSize}px`
                    }
                }
                if (options.name) {
                    document.getElementById(`entryCategory${category}`)[0].innerText = options.name
                }
            }
        };

        function addBlock(blockname, template, events, event, params, _class, func, skeleton = 'basic') {
            Entry.block[blockname] = {
                color: EntryStatic.colorSet.block.default.HARDWARE,
                outerLine: EntryStatic.colorSet.block.darken.HARDWARE,
                skeleton,
                statement: [],
                params: params.params,
                events: events ? events : {},
                event: event ? event : "default",
                def: {
                    params: params.define,
                    type: blockname
                },
                paramsKeyMap: params.map,
                class: _class ? _class : 'default',
                func,
                template
            }
        };
        for (let i in blocksJSON) {
            let block = blocksJSON[i];
            blockArray.push(block.name);
            addBlock(block.name, block.template, block.events, block.event, {
                params: block.params,
                define: block.def,
                map: block.map
            }, block.class, block.func, block.skeleton)
        };
        Entry.staticBlocks.push({
            category: category,
            blocks: blockArray
        });
        if (typeof useWebGL === "undefined") {
            updateCategory(category)
        };
        let css = document.createElement('style');
        css.append(`#entryCategory${category}{background-image:url(/lib/entry-js/images/hardware.svg);background-repeat:no-repeat;margin-bottom:1px}.entrySelectedCategory#entryCategory${category}{background-image:url(/lib/entry-js/images/hardware_on.svg);background-color:#00b6b1;border-color:#00b6b1;color:#fff}`);
        document.head.append(css);
        document.getElementById(`entryCategory${category}`).append(text);
        console.log(`EntCord version v${v}Beta`)
    }
};
const b = [{
    name: 'login',
    template: '디스코드 봇 %1 (으)로 로그인하기%2',
    params: [{
        type: 'Block',
        accept: 'string'
    }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 11
    }],
    def: [{
        type: 'text',
        params: ['token']
    }, null],
    map: {
        TOKEN: 0
    },
    class: 'login',
    func: (sprite, script) => {
        if (!c.user) {
            c.login(script.getValue("TOKEN", script)).then(e => alert(`${c.user.tag} is Login`)).catch(e => alert(e))
        } else {
            c.destroy();
            c.login(script.getValue("TOKEN", script)).then(e => alert(`${c.user.tag} is Login`)).catch(e => alert(e))
        };
        return script.callReturn()
    }
}, {
    name: 'destroy',
    template: '디스코드 봇 끄기%1',
    params: [{
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 11
    }],
    def: [null],
    map: {},
    class: 'login',
    func: (sprite, script) => {
        if (!c.user) {
            Entry.toast.alert('경고', '봇 로그인을 해 주세요.', true)
        } else {
            c.destroy();
            alert('봇 종료')
        };
        return script.callReturn()
    }
}, {
    name: 'client_user_setActivity',
    template: '디스코드 봇 상태메세지를 %1 %2 (으)로 설정하기%3',
    params: [{
        type: 'Block',
        accept: 'string'
    }, {
        type: 'Dropdown',
        options: [
            ['CUSTOM_STATUS', 'CUSTOM_STATUS'],
            ['LISTENING', 'LISTENING'],
            ['PLAYING', 'PLAYING'],
            ['WATCHING', 'WATCHING']
        ],
        fontSize: 11,
        arrowColor: '#FFD974',
        value: 'PLAYING'
    }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 11
    }],
    def: [{
        type: 'text',
        params: ['안녕하세요']
    }, null, null],
    map: {
        CONTENT: 0,
        TYPE: 1
    },
    class: 'block',
    func: (sprite, script) => {
        if (!c.user) {
            c.on('ready', () => {
                c.user.setActivity(script.getValue('CONTENT', script), {
                    type: script.getValue('TYPE', script)
                })
            })
        } else {
            c.user.setActivity(script.getValue('CONTENT', script), {
                type: script.getValue('TYPE', script)
            })
        };
        return script.callReturn()
    }
}, {
    name: 'message_command',
    template: '유저가 %1 (이)라고 보내면 %2 (이)라고 대답하기%3',
    params: [{
        type: 'Block',
        accept: 'string'
    }, {
        type: 'Block',
        accept: 'string'
    }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 11,
    }],
    def: [{
        type: 'text',
        params: ['!안녕']
    }, {
        type: 'text',
        params: ['안녕하세요!']
    }, null],
    map: {
        CONTENT: 0,
        COMMAND: 1
    },
    class: 'block',
    func: (sprite, script) => {
        c.on('message', m => {
            if (m.content == script.getValue("CONTENT", script)) {
                m.channel.send(script.getValue("COMMAND", script))
            }
        });
        return script.callReturn()
    }
}, {
    name: 'message_channel_send',
    template: '메세지를 보낸 채널의 %1 (이)라고 보내기%2',
    params: [{
        type: 'Block',
        accept: 'string'
    }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 11
    }],
    def: [{
        type: 'text',
        params: ['Hello, world!']
    }],
    type: {
        CONTENT: 0
    },
    class: 'block',
    func: (sprite, script) => {
        c.on('message', m => {
            if (m) {
                m.channel.send(script.getValue('CONTENT', script))
            }
        });
        return script.callReturn()
    }
}, {
    name: 'message_author_send',
    template: '메세지를 보낸 유저한테 %1 (이)라고 DM 보내기%2',
    params: [{
        type: 'Block',
        accept: 'string'
    }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 11
    }],
    def: [{
        type: 'text',
        params: ['Hello, world!']
    }],
    type: {
        CONTENT: 0
    },
    class: 'block',
    func: (sprite, script) => {
        c.on('message', m => {
            if (m) {
                m.author.send(script.getValue('CONTENT', script))
            }
        });
        return script.callReturn()
    }
}, {
    name: 'client_user_get_send',
    template: '디스코드 봇이 있는 모든 서버 내에서 %1 유저한테 %2 라고 DM 보내기%3',
    params: [{
        type: 'Block',
        accept: 'string'
    }, {
        type: 'Block',
        accept: 'string'
    }, {
        type: 'Indicator',
        img: 'block_icon/hardware_icon.svg',
        size: 11
    }],
    def: [{
        type: 'text',
        params: ['ditto7890#5158']
    }, {
        type: 'text',
        params: ['안녕하세요']
    }, null],
    map: {
        USER: 0,
        CONTENT: 1
    },
    class: 'block',
    func: (sprite, script) => {
        const u = c.users.cache.find(n => {
            return n.id.toLowerCase().includes(script.getValue("USER", script)) || n.tag.toLowerCase().includes(script.getValue("USER", script)) || n.username.toLowerCase().includes(script.getValue("USER", script))
        });
        if (u) {
            u.send(script.getValue("CONTENT", script))
        }
    }
}, {
    name: 'client_user',
    template: '디스코드 봇',
    skeleton: 'basic_string_field',
    params: [],
    def: [],
    map: {},
    class: 'client',
    func: (sprite, script) => {
        return c.user
    }
}, {
    name: 'client_user_type',
    template: '디스코드 봇의 %1',
    skeleton: 'basic_string_field',
    params: [{
        type: 'Dropdown',
        options: [
            ['이름', 'c.user.username'],
            ['ID', 'c.user.id'],
            ['태그', 'c.user.tag'],
            ['태그(숫자)', 'c.user.discriminator'],
            ['아바타', 'c.user.avatar'],
            ['모든 유저와 봇의 수', 'c.users.cache.size'],
            ['모든 봇의 수', 'c.users.cache.filter(n=>n.bot).size'],
            ['모든 유저의 수', 'c.users.cache.filter(n=>!n.bot).size'],
            ['모든 채널의 수', 'c.channels.cache.size'],
            ['채팅 채널의 수', 'c.channels.cache.filter(n=>n.type=="text").size'],
            ['음성 채널의 수', 'c.channels.cache.filter(n=>n.type=="voice").size'],
            ['뉴스 채널의 수', 'c.channels.cache.filter(n=>n.type=="news").size'],
            ['카테고리 채널의 수', 'c.channels.cache.filter(n=>n.type=="category").size'],
            ['DM 채널의 수', 'c.channels.cache.filter(n=>n.type=="dm").size'],
            ['모든 이모지의 수', 'c.emojis.cache.size']
        ],
        fontSize: 11,
        arrowColor: '#FFD974',
        value: 'c.user.username'
    }],
    def: [null],
    map: {
        TYPE: 0
    },
    class: 'client',
    func: (sprite, script) => {
        if (!c.user) {
            c.on('ready', () => {
                return eval(script.getValue('TYPE', script))
            })
        } else {
            return eval(script.getValue('TYPE', script))
        }
    }
}, {
    name: 'client_user_displayAvatarURL',
    template: '디스코드 봇 프로필 사진 URL %1 크기: %2',
    skeleton: 'basic_string_field',
    params: [{
        type: 'Dropdown',
        options: [
            ['PNG', 'png'],
            ['JPG', 'jpg'],
            ['JPEG', 'jpeg'],
            ['GIF', 'gif'],
            ['WEBP', 'webp']
        ],
        fontSize: 11,
        arrowColor: '#FFD974',
        value: 'png'
    }, {
        type: 'Dropdown',
        options: [
            [16, 16],
            [32, 32],
            [64, 64],
            [128, 128],
            [256, 256],
            [512, 512],
            [1024, 1024],
            [2048, 2048],
            [4096, 4096]
        ],
        fontSize: 11,
        arrowColor: '#FFD974',
        value: 1024
    }],
    def: [null, null],
    map: {
        FORMAT: 0,
        SIZE: 1
    },
    class: 'client',
    func: (sprite, script) => {
        return c.user.displayAvatarURL({
            dynamic: true,
            format: script.getValue("FORMAT", script),
            size: script.getValue("SIZE", script)
        })
    }
}, {
    name: 'message_content',
    template: '메세지 내용',
    skeleton: 'basic_string_field',
    params: [],
    def: [],
    map: {},
    class: 'message_content',
    func: (sprite, script) => {
        c.on('message', m => {
            if (m) {
                return m.content
            }
        })
    }
}, {
    name: 'message_author',
    template: '메세지를 보낸 유저',
    skeleton: 'basic_string_field',
    params: [],
    def: [],
    map: {},
    class: 'message_author',
    func: (sprite, script) => {
        c.on('message', m => {
            if (m) {
                return m.author
            }
        })
    }
}, {
    name: 'message_author_type',
    template: '메세지를 보낸 유저의 %1',
    skeleton: 'basic_string_field',
    params: [{
        type: 'Dropdown',
        options: [
            ['이름', 'username'],
            ['ID', 'id'],
            ['태그', 'tag'],
            ['태그(숫자)', 'discriminator'],
            ['아바타', 'avatar'],
            ['디스코드 가입 날짜', 'createdAt']
        ],
        fontSize: 11,
        arrowColor: '#FFD974',
        value: 'username'
    }],
    def: [null],
    map: {
        TYPE: 0
    },
    class: 'message_author',
    func: (sprite, script) => {
        c.on('message', m => {
            if (m) {
                return eval(`m.author.${script.getValue('TYPE',script)}`)
            }
        })
    }
}, {
    name: 'message_author_displayAvatarURL',
    template: '메세지를 보낸 유저의 프로필 사진 URL %1 크기: %2',
    skeleton: 'basic_string_field',
    params: [{
        type: 'Dropdown',
        options: [
            ['PNG', 'png'],
            ['JPG', 'jpg'],
            ['JPEG', 'jpeg'],
            ['GIF', 'gif'],
            ['WEBP', 'webp']
        ],
        fontSize: 11,
        arrowColor: '#FFD974',
        value: 'png'
    }, {
        type: 'Dropdown',
        options: [
            [16, 16],
            [32, 32],
            [64, 64],
            [128, 128],
            [256, 256],
            [512, 512],
            [1024, 1024],
            [2048, 2048],
            [4096, 4096]
        ],
        fontSize: 11,
        arrowColor: '#FFD974',
        value: 1024
    }],
    def: [null, null],
    map: {
        FORMAT: 0,
        SIZE: 1
    },
    class: 'message_author',
    func: (sprite, script) => {
        c.on('message', m => {
            if (m) {
                return m.author.displayAvatarURL({
                    dynamic: true,
                    format: script.getValue("FORMAT", script),
                    size: script.getValue("SIZE", script)
                })
            }
        })
    }
}, {
    name: 'message_guild',
    template: '메세지를 보낸 서버',
    skeleton: 'basic_string_field',
    params: [],
    def: [],
    map: {},
    class: 'message_guild',
    func: (sprite, script) => {
        c.on('message', m => {
            if (m) {
                return m.guild
            }
        })
    }
}, {
    name: 'message_guild_type',
    template: '메세지를 보낸 서버의 %1',
    skeleton: 'basic_string_field',
    params: [{
        type: 'Dropdown',
        options: [
            ['이름', 'name'],
            ['ID', 'id'],
            ['모든 유저와 봇 수', 'memberCount'],
            ['모든 봇 수', 'members.cache.filter(n=>n.user.bot).size'],
            ['모든 유저 수', 'members.cache.filter(n=>!n.user.bot).size'],
            ['아이콘', 'icon'],
            ['생성된 시간', 'createdAt'],
            ['모든 채널 수', 'channels.cache.size']
        ],
        fontSize: 11,
        arrowColor: '#FFD974',
        value: 'name'
    }],
    def: [null],
    map: {
        TYPE: 0
    },
    class: 'message_guild',
    func: (sprite, script) => {
        c.on('message', m => {
            if (m) {
                return eval(`m.guild.${script.getValue('TYPE',script)}`)
            }
        })
    }
}, {
    name: 'message_guild_iconURL',
    template: '메세지를 보낸 서버의 아이콘 URL %1 크기: %2',
    skeleton: 'basic_string_field',
    params: [{
        type: 'Dropdown',
        options: [
            ['PNG', 'png'],
            ['JPG', 'jpg'],
            ['JPEG', 'jpeg'],
            ['GIF', 'gif'],
            ['WEBP', 'webp']
        ],
        fontSize: 11,
        arrowColor: '#FFD974',
        value: 'png'
    }, {
        type: 'Dropdown',
        options: [
            [16, 16],
            [32, 32],
            [64, 64],
            [128, 128],
            [256, 256],
            [512, 512],
            [1024, 1024],
            [2048, 2048],
            [4096, 4096]
        ],
        fontSize: 11,
        arrowColor: '#FFD974',
        value: 1024
    }],
    def: [null, null],
    map: {
        FORMAT: 0,
        SIZE: 1
    },
    class: 'message_guild',
    func: (sprite, script) => {
        c.on('message', m => {
            if (m) {
                return m.guild.iconURL({
                    dynamic: true,
                    format: script.getValue('FORMAT', script),
                    size: script.getValue('SIZE', script)
                })
            }
        })
    }
}, {
    name: 'if_message_author_bot',
    template: '메세지를 보낸 유저가 %1인가?',
    skeleton: 'basic_boolean_field',
    params: [{
        type: 'Dropdown',
        options: [
            ['봇', 'm.author.bot'],
            ['시스템', 'm.system']
        ],
        fontSize: 11,
        arrowColor: '#FFD974',
        value: 'm.author.bot'
    }],
    def: [null],
    map: {
        TYPE: 0
    },
    class: 'boolean',
    func: (sprite, script) => {
        c.on('message', m => {
            if (m) {
                return eval(script.getValue('TYPE', script))
            }
        })
    }
}, {
    name: 'entcord_version',
    template: 'EntCord 버전',
    skeleton: 'basic_string_field',
    params: [],
    def: [],
    map: {},
    class: 'entcord',
    func: (sprite, script) => v
}];
l.s(b, 'EntCord', 'EntCord')